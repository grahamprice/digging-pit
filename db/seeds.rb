# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(username: "thediggingpit", email: "dig@thediggingpit.com", first_name: 'Max', last_name: "Beezy", admin: true, password: 'password')
user2 = User.create(username: "buzz", email: "buzz@nasa.com", first_name: "Buzz", last_name: "Aldrin", admin: false, password: '123' )
user3 = User.create(username: "arod", email: "arod@nyy.com", first_name: "Alex", last_name: "Rodriguez", admin: false, password: 'dinger' )

puts 'seeding categories...'

#Category seeds
mens_category = Category.create( name: "Men's", description: "Men's Products", image: "https://pyxis.nymag.com/v1/imgs/36b/a9d/596289e7731ebecec1ebde78a3475c0620-StratWoodenSleepersLede.rhorizontal.w700.jpg" )
womens_category = Category.create( name: "Women's", description: "Women's Products", image: "https://i.etsystatic.com/24271884/r/il/e5f6fc/3869700397/il_794xN.3869700397_seul.jpg" )
accessories_category = Category.create( name: "Accessories", description: "Accessories", image: "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=width:2400,fit:crop/output=quality:70/compress/https://process.fs.grailed.com/1NG2iySoRXytm5YRfU8S")

puts "categories seeded"


puts 'seeding products...'

#Product Seeds

#mens
product1 = Product.create( name: "Nike x Billie Eilish NRG Fleece Hoodie 'Mushroom/Sequoia'", description: "Tay k very hard", price: 302, category_id: 1, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/667/522/original/937713_01.jpg.jpeg?action=crop&width=950", user_id: 1)
product2 = Product.create( name: "Cactus Plant Flea Market x KAWS Shirt 'Black'", description: "Smile", price: 82, category_id: 1, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/070/340/108/original/923914_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product3 = Product.create( name: "BAPE ABC Camo Shark Full Zip Hoodie 'Pink'", description: "I got me some bathing ape", price: 999, category_id: 1, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/072/771/881/original/949552_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product4 = Product.create( name: "Chrome Hearts Cross Cemetery Tee 'Black/Multicolor'", description: "Chrome Heart Tag", price: 701, category_id: 1, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/068/941/520/original/904177_01.jpg.jpeg?action=crop&width=950", user_id: 3)
product5 = Product.create( name: "Sp5der P*nk Hoodie 'Black'", description: "Super slimey", price: 272, category_id: 1, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/064/331/797/original/857581_01.jpg.jpeg?action=crop&width=950", user_id: 3)

#womens
product6 = Product.create( name: "Marine Serre Second Skin Moon Top 'All Over Moon Tan'", description: "WHOOOOO", price: 347, category_id: 2, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/079/842/original/919790_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product7 = Product.create( name: "The North Face x Gucci GG Canvas Shearling Jacket 'Beige/Ebony'", description: "GUCCI!!! BURRR", price: 3002, category_id: 2, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/796/353/original/756829_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product8 = Product.create( name: "Versace Royalty Print Blouse 'Multicolor'", description: " Nice.", price: 383, category_id: 2, image: " https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/170/188/original/902772_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product9 = Product.create( name: "Sporty & Rich Marathon Long-Sleeve T-Shirt 'Black'",  description: "Sweet!", price: 50, category_id: 2, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/049/212/770/original/727496_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product10 = Product.create( name: "Nike x Stussy Insulated Skirt 'White/Gorge Green'", description: "Ruined on purpose", price: 102, category_id: 2, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/282/844/original/751399_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product11 = Product.create( name: "Comme des Garçons Logo Print Short Sleeve T-Shirt 'White'", description: "CDG Light piece", price: 345, category_id: 2, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/070/098/644/original/921785_01.jpg.jpeg?width=950", user_id: 2)

#accessories
product12 = Product.create( name: "Balenciaga Toy Bracelet 'Multicolor/Silver'", description: "Like candy from balenci", price: 3500, category_id: 3, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/049/068/350/original/724873_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product13 = Product.create( name: "Hatton Labs Rainbow Tennis Bracelet 'Solid Sterling Silver'", description: "Taste the rainbow", price: 14000, category_id: 3, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/070/791/605/original/929076_01.jpg.jpeg?action=crop&width=950", user_id: 3)
product14 = Product.create( name: "Saint Laurent Bones Ring 'Oxidized Silver'", description: "I smell like ysl", price: 2000, category_id: 3, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/063/370/789/original/851214_01.jpg.jpeg?action=crop&width=950", user_id: 3)
product15 = Product.create( name: "Chrome Hearts Diamond Studded Dagger Bracelet 'Silver'", description: "Diamonds on my wrist", price: 1399, category_id: 3, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/068/834/737/original/764126_01.jpg.jpeg?action=crop&width=950", user_id: 2)
product16 = Product.create( name: "Palm Angels Logo Bracelet 'Black/Off White'", description: "Like hawaiian but way more expensive and made in taiwan", price: 215, category_id: 3, image: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/033/988/original/927661_01.jpg.jpeg?action=crop&width=950", user_id: 3)
puts 'products seeded'

    cart_item1 = CartItem.create(product_id: 10, user_id: 2, quantity: 1)
    cart_item1 = CartItem.create(product_id: 1, user_id: 3, quantity: 1)
    cart_item1 = CartItem.create(product_id: 5, user_id: 2, quantity: 1)
    cart_item1 = CartItem.create(product_id: 6, user_id: 2, quantity: 1)
    cart_item1 = CartItem.create(product_id: 7, user_id: 3, quantity: 1)
    cart_item1 = CartItem.create(product_id: 11, user_id: 2, quantity: 2)
    cart_item1 = CartItem.create(product_id: 1, user_id: 3, quantity: 2)
    cart_item1 = CartItem.create(product_id: 2, user_id: 3, quantity: 1)
    cart_item1 = CartItem.create(product_id: 4, user_id: 2, quantity: 10)
    cart_item1 = CartItem.create(product_id: 3, user_id: 2, quantity: 1)
    cart_item1 = CartItem.create(product_id: 9, user_id: 3, quantity: 1)
    puts 'cart items seeded'

puts "Data Seeded :)))"
