"""Génère les variantes du logo (PNG transparent) + favicon à partir du logo source (JPG sur fond blanc).
Usage : python scripts/make-logo-assets.py <logo-source.jpg>
"""
import sys
import numpy as np
from PIL import Image, ImageDraw

src = sys.argv[1]
NAVY = np.array([61, 86, 110], float)     # bleu-gris du logo
GREEN = np.array([127, 203, 48], float)   # vert du logo
im = np.asarray(Image.open(src).convert('RGB'), float)

# Pixel vert ou bleu ? (teinte dominante)
# vert : le canal vert domine nettement le bleu (le bleu-gris du logo a G < B)
is_green = (im[..., 1] - im[..., 2]) > 40
target = np.where(is_green[..., None], GREEN, NAVY)

# Opacité = quantité de couleur « par-dessus le blanc » (garde un bord net et lissé)
alpha = np.max((255 - im) / np.maximum(255 - target, 1), axis=-1)
alpha = np.clip(alpha, 0, 1)
alpha[alpha < 0.04] = 0

def build(rgb_navy):
    col = np.where(is_green[..., None], GREEN, np.array(rgb_navy, float))
    out = np.dstack([col, alpha * 255]).astype(np.uint8)
    return Image.fromarray(out, 'RGBA')

color = build(NAVY)
white = build([255, 255, 255])

# Recadrage serré sur le contenu
bbox = color.getchannel('A').point(lambda a: 255 if a > 10 else 0).getbbox()
pad = 6
bbox = (max(bbox[0]-pad, 0), max(bbox[1]-pad, 0), bbox[2]+pad, bbox[3]+pad)
color = color.crop(bbox)
white = white.crop(bbox)
color.save('public/images/logo-ges.png', optimize=True)
white.save('public/images/logo-ges-white.png', optimize=True)
print('logo', color.size)

# Icône seule (cercle + éclair) = partie haute du logo, avant le texte « GES »
a = np.asarray(color.getchannel('A'))
rows = np.where(a.max(axis=1) > 10)[0]
# première coupure verticale vide (entre l'icône et « GES »)
gaps = np.where(np.diff(rows) > 8)[0]
icon_bottom = rows[gaps[0]] + 1 if len(gaps) else int(color.size[1] * 0.62)
icon = color.crop((0, 0, color.size[0], icon_bottom))
ib = icon.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()
icon = icon.crop(ib)
print('icon', icon.size)

# Favicon : icône sur fond blanc arrondi (lisible aussi en mode sombre)
S = 512
canvas = Image.new('RGBA', (S, S), (0, 0, 0, 0))
d = ImageDraw.Draw(canvas)
d.rounded_rectangle((0, 0, S - 1, S - 1), radius=int(S * 0.22), fill=(255, 255, 255, 255))
side = int(S * 0.74)
ratio = min(side / icon.size[0], side / icon.size[1])
ic = icon.resize((int(icon.size[0] * ratio), int(icon.size[1] * ratio)), Image.LANCZOS)
canvas.alpha_composite(ic, ((S - ic.size[0]) // 2, (S - ic.size[1]) // 2))
canvas.save('public/favicon-512.png', optimize=True)
canvas.resize((180, 180), Image.LANCZOS).save('public/apple-touch-icon.png', optimize=True)
canvas.resize((32, 32), Image.LANCZOS).save('public/favicon-32.png', optimize=True)
canvas.save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
print('favicons ok')
