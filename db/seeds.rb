require 'faker'


puts'seeding begin✅'

u1=User.create(name:"Gabriela Arnott",email:"gaby123@gmail.com",age:33,password:"1234567890",pass_confirmation:"1234567890",location:"New York",profile_photo:"")
u2=User.create(name:"Jay Lopez",email:"jay@gmail.com",age:19,password:"1234567890",pass_confirmation:"1234567890",location:"Lima",profile_photo:"")
u3=User.create(name:"Jasmin Perez",email:"jasmin@gmail.com",age:25,password:"1234567890",pass_confirmation:"1234567890",location:"Cusco",profile_photo:"")
u4=User.create(name:"Manuel Rivadeneyra",email:"manuel@gmail.com",age:45,password:"1234567890",pass_confirmation:"1234567890",location:"virginia",profile_photo:"")
u5=User.create(name:"Valeria Saavedra",email:"valeri@gmail.com",age:24,password:"1234567890",pass_confirmation:"1234567890",location:"Texas",profile_photo:"")

b1=Board.create(title:"Favorite Recipes")
b2=Board.create(title:"Travel Wishlist")
b3=Board.create(title:"Memes")

Userboard.create(user_id:1,board_id:1)
Userboard.create(user_id:1,board_id:2)
Userboard.create(user_id:1,board_id:3)
Userboard.create(user_id:2,board_id:1)
Userboard.create(user_id:3,board_id:1)

Post.create(url: "https://www.tiktok.com/@acomer.pe/video/7185967770155093254?is_from_webapp=1&sender_device=pc&web_id=7040950804728169990", user_id:1,board_id:1)
Post.create(url: "https://i.pinimg.com/564x/4a/b8/41/4ab84115442709e101cbb3b9be5a8cd8.jpg",  user_id: 4,board_id:2)
Post.create(url: "https://www.tiktok.com/@acomer.pe/video/7149617424449457414?is_from_webapp=1&sender_device=pc&web_id=7040950804728169990", user_id: 3,board_id:1)
Post.create(url: "https://www.tiktok.com/@healthfood/video/7186729965113625899?is_from_webapp=1&sender_device=pc&web_id=7040950804728169990",user_id: 5,board_id:2)
Post.create(url: "https://i.pinimg.com/564x/15/68/09/15680951a46f8cc31a39beb2c5d26997.jpg",  user_id: 2,board_id:3)






puts "seeding done✅"