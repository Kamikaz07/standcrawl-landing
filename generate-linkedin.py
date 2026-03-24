"""
StandCrawl LinkedIn Announcement Image Generator v3
Bold text, prominent AI neural network, refined composition
"""
from PIL import Image, ImageDraw, ImageFont
import os
import math
import random

OUT = "c:/VS-Projects/StandCrawl/landing/public/linkedin-announcement.png"
FONTS = "C:/Windows/Fonts"

W, H = 1200, 627

# === COLORS ===
NAVY       = (15, 23, 41)
NAVY_2     = (22, 32, 55)
ORANGE     = (247, 127, 0)
OFF_WHITE  = (250, 250, 250)
MUTED      = (130, 140, 160)
SUCCESS    = (34, 197, 94)
BLUE       = (59, 130, 246)
PURPLE     = (139, 92, 246)

F = lambda name, size: ImageFont.truetype(os.path.join(FONTS, name), size)

brand_font   = F("segoeuib.ttf", 72)
tagline_font = F("segoeuil.ttf", 30)
tagline_b    = F("seguisb.ttf", 30)
sub_font     = F("segoeui.ttf", 15)
pill_font    = F("consolab.ttf", 12)
url_font     = F("consola.ttf", 13)
cta_font     = F("seguisb.ttf", 15)
node_label   = F("consolab.ttf", 9)
ai_big       = F("segoeuib.ttf", 20)


def L():
    return Image.new('RGBA', (W, H), (0, 0, 0, 0))


# === BASE ===
img = Image.new('RGBA', (W, H), NAVY)
draw = ImageDraw.Draw(img)

for y in range(H):
    p = y / H
    r = int(NAVY[0] + (NAVY_2[0] - NAVY[0]) * p)
    g = int(NAVY[1] + (NAVY_2[1] - NAVY[1]) * p)
    b = int(NAVY[2] + (NAVY_2[2] - NAVY[2]) * p)
    draw.line([(0, y), (W, y)], fill=(r, g, b, 255))

# Grid
gl = L()
gd = ImageDraw.Draw(gl)
for x in range(0, W, 50):
    gd.line([(x, 0), (x, H)], fill=(255, 255, 255, 4), width=1)
for y_ in range(0, H, 50):
    gd.line([(0, y_), (W, y_)], fill=(255, 255, 255, 4), width=1)
img = Image.alpha_composite(img, gl)

# === GLOWS ===
# Main orange glow (right-center)
glow = L()
gd2 = ImageDraw.Draw(glow)
for i in range(280, 0, -1):
    a = int(10 * (1 - i / 280))
    cx, cy = 880, 310
    r = i * 2.2
    gd2.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(247, 127, 0, a))
img = Image.alpha_composite(img, glow)

# Blue accent glow (top-right)
glow2 = L()
gd3 = ImageDraw.Draw(glow2)
for i in range(180, 0, -1):
    a = int(6 * (1 - i / 180))
    cx, cy = 1080, 100
    r = i * 1.8
    gd3.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(59, 130, 246, a))
img = Image.alpha_composite(img, glow2)

# === AI NEURAL NETWORK (prominent) ===
random.seed(42)

# Define layers
layers = {
    0: [(700, 120), (700, 260), (700, 400), (700, 520)],     # Input
    1: [(860, 80), (860, 195), (860, 310), (860, 425), (860, 540)],  # Hidden 1
    2: [(1020, 120), (1020, 260), (1020, 400), (1020, 520)],  # Hidden 2
    3: [(1150, 180), (1150, 320), (1150, 460)],                # Output
}

# Draw connections (more visible)
conn = L()
cd = ImageDraw.Draw(conn)
for l in range(3):
    for x1, y1 in layers[l]:
        for x2, y2 in layers[l + 1]:
            dist = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            # Color based on layer transition
            if l == 0:
                color = ORANGE
            elif l == 1:
                color = BLUE
            else:
                color = SUCCESS
            alpha = max(8, int(30 - dist / 25))
            cd.line([(x1, y1), (x2, y2)], fill=color + (alpha,), width=1)
img = Image.alpha_composite(img, conn)

# Draw data flow dots along some connections
flow = L()
fd = ImageDraw.Draw(flow)
random.seed(7)
for l in range(3):
    for x1, y1 in layers[l]:
        for x2, y2 in layers[l + 1]:
            if random.random() > 0.6:
                # Place a glowing dot at a random position along the line
                t = random.uniform(0.2, 0.8)
                dx = int(x1 + (x2 - x1) * t)
                dy = int(y1 + (y2 - y1) * t)
                color = ORANGE if l == 0 else (BLUE if l == 1 else SUCCESS)
                # Outer glow
                for gi in range(12, 0, -1):
                    ga = int(8 * (1 - gi / 12))
                    fd.ellipse([dx - gi, dy - gi, dx + gi, dy + gi], fill=color + (ga,))
                fd.ellipse([dx - 2, dy - 2, dx + 2, dy + 2], fill=color + (160,))
img = Image.alpha_composite(img, flow)

# Draw nodes (bigger, more visible)
for l_idx, nodes in layers.items():
    for x, y in nodes:
        nl = L()
        nd = ImageDraw.Draw(nl)

        if l_idx == 0:
            color = ORANGE
        elif l_idx == 1:
            color = (200, 140, 60)  # warm transition
        elif l_idx == 2:
            color = BLUE
        else:
            color = SUCCESS

        # Outer glow ring
        for gi in range(25, 0, -1):
            ga = int(6 * (1 - gi / 25))
            nd.ellipse([x - gi, y - gi, x + gi, y + gi], fill=color + (ga,))

        # Node ring
        nd.ellipse([x - 7, y - 7, x + 7, y + 7], fill=(0, 0, 0, 0), outline=color + (60,), width=2)
        # Node core
        nd.ellipse([x - 4, y - 4, x + 4, y + 4], fill=color + (120,))
        nd.ellipse([x - 2, y - 2, x + 2, y + 2], fill=color + (200,))

        img = Image.alpha_composite(img, nl)

# Node labels
draw = ImageDraw.Draw(img)
input_labels = [
    (700, 92, "SCOUT"),
    (700, 232, "ANALYST"),
    (700, 372, "VALUATOR"),
    (700, 492, "RECOMMENDER"),
]
output_labels = [
    (1150, 155, "PRICING"),
    (1150, 295, "ALERTAS"),
    (1150, 435, "AQUISIÇÃO"),
]

for lx, ly, txt in input_labels + output_labels:
    tl = L()
    td = ImageDraw.Draw(tl)
    tb = td.textbbox((0, 0), txt, font=node_label)
    tw = tb[2] - tb[0]
    td.text((lx - tw // 2, ly), txt, font=node_label, fill=(255, 255, 255, 40))
    img = Image.alpha_composite(img, tl)

# Central AI badge
draw = ImageDraw.Draw(img)
ai_badge = L()
abd = ImageDraw.Draw(ai_badge)
ai_cx, ai_cy = 860, 310

# Glow behind badge
for gi in range(40, 0, -1):
    ga = int(8 * (1 - gi / 40))
    abd.ellipse([ai_cx - gi, ai_cy - gi, ai_cx + gi, ai_cy + gi], fill=(247, 127, 0, ga))

abd.rounded_rectangle([ai_cx - 32, ai_cy - 18, ai_cx + 32, ai_cy + 18], radius=10, fill=(247, 127, 0, 50), outline=(247, 127, 0, 100), width=1)
tb = abd.textbbox((0, 0), "AI", font=ai_big)
tw = tb[2] - tb[0]
th = tb[3] - tb[1]
abd.text((ai_cx - tw // 2, ai_cy - th // 2 - 2), "AI", font=ai_big, fill=ORANGE + (240,))
img = Image.alpha_composite(img, ai_badge)
draw = ImageDraw.Draw(img)

# === LEFT SIDE: TEXT ===
LX = 60
top_y = 52

# Orange accent bar
draw.rectangle([LX, top_y, LX + 52, top_y + 5], fill=ORANGE + (255,))

# Brand name
by = top_y + 24
draw.text((LX, by), "StandCrawl", font=brand_font, fill=OFF_WHITE + (255,))
bb = draw.textbbox((LX, by), "StandCrawl", font=brand_font)
draw.ellipse([bb[2] + 5, bb[3] - 20, bb[2] + 21, bb[3] - 4], fill=ORANGE + (255,))

# Tagline
ty = by + 92
draw.text((LX, ty), "O seu stand automóvel,", font=tagline_font, fill=OFF_WHITE + (220,))
draw.text((LX, ty + 40), "automatizado com IA.", font=tagline_b, fill=ORANGE + (255,))

# Subtitle
sy = ty + 104
draw.text((LX, sy), "Pricing com Machine Learning · Agentes de prospeção 24/7", font=sub_font, fill=MUTED + (255,))
draw.text((LX, sy + 22), "CRM inteligente · Análise de mercado em tempo real", font=sub_font, fill=MUTED + (255,))

# === FEATURE PILLS ===
py_ = sy + 62
features = [
    ("AI Pricing", ORANGE),
    ("4 Agentes IA", BLUE),
    ("CRM & Leads", SUCCESS),
    ("Market Explorer", PURPLE),
]
px = LX

for feat, color in features:
    tb = draw.textbbox((0, 0), feat, font=pill_font)
    tw = tb[2] - tb[0]
    pw = tw + 24
    ph = 28

    pl = L()
    pd = ImageDraw.Draw(pl)
    pd.rounded_rectangle([px, py_, px + pw, py_ + ph], radius=6, fill=color + (18,), outline=color + (55,), width=1)
    img = Image.alpha_composite(img, pl)
    draw = ImageDraw.Draw(img)
    draw.text((px + 12, py_ + 6), feat, font=pill_font, fill=color + (220,))
    px += pw + 8

# === CTA ===
cta_y = py_ + 48
cl = L()
cld = ImageDraw.Draw(cl)
# Glow
for i in range(20, 0, -1):
    ga = int(5 * (1 - i / 20))
    cld.rounded_rectangle([LX - i, cta_y - i, LX + 220 + i, cta_y + 44 + i], radius=12 + i, outline=(247, 127, 0, ga), width=1)
cld.rounded_rectangle([LX, cta_y, LX + 220, cta_y + 44], radius=10, fill=ORANGE + (240,))
img = Image.alpha_composite(img, cl)
draw = ImageDraw.Draw(img)
draw.text((LX + 22, cta_y + 12), "Experimentar Grátis  →", font=cta_font, fill=(255, 255, 255, 255))

# === BOTTOM ===
bot_y = H - 40
bl2 = L()
bld = ImageDraw.Draw(bl2)
bld.line([(LX, bot_y - 12), (620, bot_y - 12)], fill=(255, 255, 255, 10), width=1)
img = Image.alpha_composite(img, bl2)
draw = ImageDraw.Draw(img)

draw.text((LX, bot_y), "standcrawl.pt", font=url_font, fill=OFF_WHITE + (150,))

badge = "Powered by AI"
btb = draw.textbbox((0, 0), badge, font=pill_font)
btw = btb[2] - btb[0]
bx = 620 - btw - 24
bl3 = L()
bld3 = ImageDraw.Draw(bl3)
bld3.rounded_rectangle([bx, bot_y - 3, bx + btw + 20, bot_y + 17], radius=5, fill=(247, 127, 0, 16), outline=(247, 127, 0, 40), width=1)
img = Image.alpha_composite(img, bl3)
draw = ImageDraw.Draw(img)
draw.text((bx + 10, bot_y - 1), badge, font=pill_font, fill=ORANGE + (190,))

# === SAVE ===
final = img.convert('RGB')
final.save(OUT, quality=98)
print(f"Saved: {OUT}")
print(f"Size: {final.size}")
