from PIL import Image

img = Image.open("C:/Users/Boss/Downloads/customer-dashboard-redesign11 (2)/src/neone-bg.png")
# Get the top-left pixel
pixel = img.getpixel((10, 10))
print("Top-left pixel (10, 10):", pixel)

# Get a pixel near the bottom center but away from the glow (e.g. at x=100, y=800)
pixel2 = img.getpixel((100, img.height - 20))
print("Bottom-left pixel:", pixel2)
