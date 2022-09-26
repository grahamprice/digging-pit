# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# user1 = User.create(username: "thediggingpit", email: "dig@diggingpit.com", password: )


#Category seeds
mens_category = Category.create( name: "Men's", description: "Men's Products", image: "https://pyxis.nymag.com/v1/imgs/36b/a9d/596289e7731ebecec1ebde78a3475c0620-StratWoodenSleepersLede.rhorizontal.w700.jpg" )
womens_category = Category.create( name: "Women's", description: "Women's Products", image: "https://i.etsystatic.com/24271884/r/il/e5f6fc/3869700397/il_794xN.3869700397_seul.jpg" )
accessories_category = Category.create( name: "Accessories", description: "Accessories", image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/1NG2iySoRXytm5YRfU8S")



#Product Seeds
product1 = Product.create( name: "Harley T Shirt", description: "Men's Harley Davidson Short Sleeve Vintage Shirt", price: "124", category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/auto_image/cache=expiry:max/rotate=deg:exif/resize=height:700/output=quality:90/compress/sxIxGUtQeGszbOJ30Ttg")
product2 = Product.create( name: "Off-White x Chrome Hearts Art Basel 2018 Patchwork Denim", description: "Designer: Off-White x Chrome Hearts", price: "8,500", category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/cFgNIp66TgihdV23AcUl")
product3 = Product.create( name: "Raf Simons x Sterling Ruby Fall/Winter 2014 Wool Coat", description: "Designer: Sterling Ruby x Raf Simons", price: "5,500", category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/gTxm8GP3Qr6G0HoGz8bg ")
product4 = Product.create( name: "Rick Owens Dunks", description: " ", price: " ", category_id: 1, image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/mwLmuYhIQ1eqQuj0yhKQ ")
# product5 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product6 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product7 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product8 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product9 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product10 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product11= Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product12 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product13 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product14 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")
# product15 = Product.create(id: , name: "", description: " ", price: " ", category_id: 1, image: " ")


puts "Data Seeded :)))"
