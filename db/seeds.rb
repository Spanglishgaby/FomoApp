require 'faker'


puts'seeding begin✅'
# t.string :name
# t.string :email
# t.string :password_digest
# t.integer :age
# t.string :location
# t.string :profile_photo
u1=User.create(name:"Gabriela Arnott",email:"gaby123@gmail.com",age:33,password:"1234567890",location:"New York",profile_photo:"")
u2=User.create(name:"Jay Lopez",email:"jay@gmail.com",age:19,password:"1234567890",location:"Lima",profile_photo:"")
u3=User.create(name:"Jasmin Perez",email:"jasmin@gmail.com",age:25,password:"1234567890",location:"Cusco",profile_photo:"")
u4=User.create(name:"Manuel Rivadeneyra",email:"manuel@gmail.com",age:45,password:"1234567890",location:"virginia",profile_photo:"")
u5=User.create(name:"Valeria Saavedra",email:"valeri@gmail.com",age:24,password:"1234567890",location:"Texas",profile_photo:"")

# # t.string :url
# #       t.string :post_content
# #       t.string :post_tag
# #       t.integer :post_like
# #       t.boolean :post_save
# #       t.belongs_to :user, null: false, foreign_key: true

Post.create(url: "https://www.tiktok.com/@acomer.pe/video/7185967770155093254?is_from_webapp=1&sender_device=pc&web_id=7040950804728169990", user_id:1)
Post.create(url: "https://i.pinimg.com/564x/4a/b8/41/4ab84115442709e101cbb3b9be5a8cd8.jpg",  user_id: 4)
Post.create(url: "https://www.tiktok.com/@acomer.pe/video/7149617424449457414?is_from_webapp=1&sender_device=pc&web_id=7040950804728169990", user_id: 3)
Post.create(url: "https://www.tiktok.com/@healthfood/video/7186729965113625899?is_from_webapp=1&sender_device=pc&web_id=7040950804728169990",user_id: 5)
Post.create(url: "https://i.pinimg.com/564x/15/68/09/15680951a46f8cc31a39beb2c5d26997.jpg",  user_id: 2)


Comment.create(comment_content: Faker::Quote.yoda, user_id: 4, post_id: 1)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 5, post_id: 2)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 4, post_id: 3)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 2, post_id: 4)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 2, post_id: 5)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 1, post_id: 1)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 2, post_id: 3)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 1, post_id: 2)
Comment.create(comment_content: Faker::Quote.yoda, user_id: 3, post_id: 4)




puts "seeding done✅"