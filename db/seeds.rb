# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(username: "thediggingpit", email: "dig@diggingpit.com", first_name: 'Max', last_name: "Beezy", admin: true, password: 'password')

puts 'seeding categories...'

#Category seeds
mens_category = Category.create( name: "Men's", description: "Men's Products", image: "https://pyxis.nymag.com/v1/imgs/36b/a9d/596289e7731ebecec1ebde78a3475c0620-StratWoodenSleepersLede.rhorizontal.w700.jpg" )
womens_category = Category.create( name: "Women's", description: "Women's Products", image: "https://i.etsystatic.com/24271884/r/il/e5f6fc/3869700397/il_794xN.3869700397_seul.jpg" )
accessories_category = Category.create( name: "Accessories", description: "Accessories", image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/1NG2iySoRXytm5YRfU8S")

puts "categories seeded"


puts 'seeding products...'
#Product Seeds
product1 = Product.create( name: "Harley T Shirt", description: "Men's Harley Davidson Short Sleeve Vintage Shirt", price: 124.00, category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/sxIxGUtQeGszbOJ30Ttg", user_id: 1)
product2 = Product.create( name: "Off-White x Chrome Hearts Art Basel 2018 Patchwork Denim", description: "Designer: Off-White x Chrome Hearts", price: 8500, category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/cFgNIp66TgihdV23AcUl", user_id: 1)
product3 = Product.create( name: "Raf Simons x Sterling Ruby Fall/Winter 2014 Wool Coat", description: "Designer: Sterling Ruby x Raf Simons", price: 5500, category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/gTxm8GP3Qr6G0HoGz8bg ", user_id: 1)
product4 = Product.create( name: "Rick Owens Dunks", description: "Nice", price: 200, category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/mwLmuYhIQ1eqQuj0yhKQ ", user_id: 1)
product5 = Product.create( name: "Chanel Resort 19C La Pausa Tweed Shirt", description: "Chanel La Pausa Tweed Shirt

    An homage to Lagerfields original creations, this tweed shirt remarks both of Karls exceptional work and Gabrielle Chanels material inspiration from the 50s thru the 70s. A proof of concept though posthumously fulfilled, that Chanel will not only be a symbol of opulence and wealth but a cultural giant, a pioneer of classic style surviving two world wars and major economic crises. ", price: 550, category_id: 2, image: " https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/OxlWxMIoRBG5yoa2o238", user_id: 1)
product6 = Product.create( name: "New With Defect BALMAIN Pink Biker Jacket Size 2/36 $4995", description: " Long Sleeve
    Quilted Detailing
    Working Button Cuffs
    Gold Toned Hardware
    Double Zipper
    Size 2 US = Size 36 EU
    100% Lamb Skin
    Defect: Discolor At Shoulders
    Measurements:
    Chest: 31
    58LE-420
    N", price: 1500, category_id: 2, image: " https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/WCqLMwYTCzJJPPdw4M9Q", user_id: 1)
product7 = Product.create( name: "BNWT Prada Logo Combat Boots ankle pouch", description: "BNWT Prada Logo Combat Boots ankle pouch", description: " Brand: Prada. Model: Combat boots Fit: 1 Size bigger. Please get in touch if you are interested in purchasing more than 1 item. In that case we will be pleased to send you a combined offer. All Prices stated are set and exclude shipping.", price: "1395", category_id: 2, image: " https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/ER1eXDswQpmN91h8mtle", user_id: 1)
product8 = Product.create( name: "Balenciaga Le Cagole XS Shoulder Bag in White", description: "Balenciaga le cagole bag
    No signs of wear
    Basically brand new
    Dimensions
    L 10.2 x H 6.3 x 2 2.7 inch
    Adjustable strap 18.1 inch", price: 2250, category_id: 2, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/pYzrz9WVRwCTfisCvaqI", user_id: 1)
product9 = Product.create( name: "Christian Dior By John Galliano S/S 2006 Runway Dress", description: "Christian Dior By John Galliano S/S 2006 Runway Dress
    🍑🍑🍑🍑🍑
    Measurements
    Shoulders : 14 inches
    Chest: 15 inches
    Length : 31/37 inches
    Waist : 30 inches
    Hem : 19 inches
    Made in Italy ", price: 5000, category_id: 2, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/0617ophaSmG8C6RMMTof", user_id: 1)
product10 = Product.create( name: "Christian Dior blue Oblique saddle bag", description: "Iconic saddle bag 💼
    Cant go wrong with the oblique pattern", price: 2100, category_id: 2, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/9uS1RPPGTjICNxP18w86", user_id: 1)
product11= Product.create( name: "COUSSIN PM BAG", price: 7100, category_id: 3, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/14rzNqf0QO6LUIMNtiX8", user_id: 1)
product12 = Product.create( name: "Pink Sapphire Tiny Cross", description: "Very beautiful piece
    Sapphires even more vibrant in person
    Has a nice weight to it
    All sales are final
    No refunds ", price: 2985, category_id: 3, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/Iy6O5U40SrWXb8qhxiY3", user_id: 1)
product13 = Product.create( name: "Iced out BAPE/Kid Cudi G shock", description: "Cuatom G shock kid cudi/ Bape edition

    Natural Diamonds set by hand onto a solid gold on the watch
    
    As well as the strap buckle
    
    real diamonds
    
     ", price: 12000, category_id: 3, image: " https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/NSrtOeVSAqJGnmy66pAw", user_id: 1)
product14 = Product.create( name: "Alabaster Industries Silver Wood Grain Watch", description: "1 of 1 very rare alabaster industries watch.
    one of the OG models.
    
    the pattern on dial shines in gold or silver depending on the light.
    
    in mint condition including original box and receipt ", price: 4200, category_id: 3, image: " https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/YR3T203SR1qE65g3gfwD", user_id: 1)
product15 = Product.create( name: "CHROME HEARTS STERLING SILVER CROSS CLUSTER CUFF EARRING", description: " CHROME HEARTS STERLING SILVER CROSS CLUSTER CUFF EARRING

    AVAILABLE TO PURCHASE
    
    TO BE WORN ON THE RIGHT EAR", price: 1350 , category_id: 3, image: " https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/koNRZGeuSOWNaG2lZ0As", user_id: 1)

    puts 'products seeded'

puts "Data Seeded :)))"
