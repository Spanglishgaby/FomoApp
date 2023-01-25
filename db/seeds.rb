require 'faker'


puts'seeding begin✅'

# u1=User.create(name:"Gabriela Arnott",email:"gaby123@gmail.com",age:33,password:"1234567890",pass_confirmation:"1234567890",location:"New York",profile_photo:"")
# u2=User.create(name:"Jay Lopez",email:"jay@gmail.com",age:19,password:"1234567890",pass_confirmation:"1234567890",location:"Lima",profile_photo:"")
# u3=User.create(name:"Jasmin Perez",email:"jasmin@gmail.com",age:25,password:"1234567890",pass_confirmation:"1234567890",location:"Cusco",profile_photo:"")
# u4=User.create(name:"Manuel Rivadeneyra",email:"manuel@gmail.com",age:45,password:"1234567890",pass_confirmation:"1234567890",location:"virginia",profile_photo:"")
# u5=User.create(name:"Valeria Saavedra",email:"valeri@gmail.com",age:24,password:"1234567890",pass_confirmation:"1234567890",location:"Texas",profile_photo:"")

# b1=Board.create(title:"Favorite Recipes")
# b2=Board.create(title:"Travel Wishlist")
# b3=Board.create(title:"Memes")

# Userboard.create(user_id:2,board_id:6)
# Userboard.create(user_id:3,board_id:6)
# Userboard.create(user_id:4,board_id:6)
# Userboard.create(user_id:5,board_id:6)
# Userboard.create(user_id:4,board_id:7)
# Userboard.create(user_id:5,board_id:7)
# Userboard.create(user_id:2,board_id:8)
# Userboard.create(user_id:3,board_id:8)
# Userboard.create(user_id:1,board_id:9)
# Userboard.create(user_id:2,board_id:9)
# Userboard.create(user_id:4,board_id:9)
# Userboard.create(user_id:2,board_id:19)
# Userboard.create(user_id:3,board_id:19)
Userboard.create(user_id:2,board_id:11)


Post.create(url: "https://i.pinimg.com/564x/e0/b9/24/e0b92489b9deba38ba9cf154ca2a9c7d.jpg", user_id:1,board_id:9,post_content:"National Parks",post_tag:'travel',post_like:10)
Post.create(url: "https://i.pinimg.com/236x/40/f2/26/40f226cf79ff46169fd99ad91bb07fc5.jpg",  user_id: 2,board_id:9,post_content:"National Parks",post_tag:'travel',post_like:57)
Post.create(url: "https://i.pinimg.com/236x/01/af/aa/01afaaed00eebf02f340dd7b814f6134.jpg", user_id: 4,board_id:9,post_content:"National Parks",post_tag:'travel',post_like:22)
Post.create(url: "https://i.pinimg.com/564x/35/99/01/35990127b66b7f34b138ad324e974b77.jpg",user_id: 2,board_id:9,post_content:"National Parks",post_tag:'travel',post_like:14)

Post.create(url: "https://i.pinimg.com/564x/eb/fd/5e/ebfd5ea2d321f20d213977451ee70635.jpg",  user_id: 2,board_id:11,post_content:"Meme",post_tag:'meme',post_like:83)
Post.create(url: "https://i.pinimg.com/564x/a7/09/b1/a709b189d512776fcd05f49114ec2ed0.jpg", user_id:2,board_id:11,post_content:"Meme",post_tag:'meme',post_like:48)
Post.create(url: "https://i.pinimg.com/236x/63/af/13/63af13a0736e39d769cbf3b90d9b9bcc.jpg",  user_id: 1,board_id:11,post_content:"Meme",post_tag:'meme',post_like:135)

Post.create(url: "https://i.pinimg.com/564x/01/ce/46/01ce4638e851919d3903f56d4b18fb4b.jpg", user_id: 2,board_id:8,post_content:"Mexico",post_tag:'travel',post_like:23)
Post.create(url: "https://i.pinimg.com/564x/66/70/4f/66704f1a89624091bd30666a26e2547b.jpg",user_id: 3,board_id:8,post_content:"Mexico",post_tag:'travel',post_like:54)
Post.create(url: "https://i.pinimg.com/564x/41/8e/c9/418ec984ee1481b46b58fab0fb633ef5.jpg",  user_id: 2,board_id:8,post_content:"Mexico",post_tag:'travel',post_like:75)

# Comment.create(description: Faker::Quote.yoda, user_id: 4, post_id: 1)
# Comment.create(description: Faker::Quote.yoda, user_id: 1,post_id: 2)
# Comment.create(description: Faker::Quote.yoda, user_id: 4, post_id: 3)
# Comment.create(description: Faker::Quote.yoda, user_id: 5, post_id: 4)
# Comment.create(description: Faker::Quote.yoda, user_id: 1, post_id: 5)
# Comment.create(description: Faker::Quote.yoda, user_id: 1, post_id: 3)
# Comment.create(description: Faker::Quote.yoda, user_id: 2, post_id: 3)
# Comment.create(description: Faker::Quote.yoda, user_id: 2, post_id: 1)
# Comment.create(description: Faker::Quote.yoda, user_id: 3, post_id: 1)
# Comment.create(description: Faker::Quote.yoda, user_id: 5, post_id: 5)
# Comment.create(description: Faker::Quote.yoda, user_id: 4, post_id: 4)
# Comment.create(description: Faker::Quote.yoda, user_id: 3, post_id: 3)
# Comment.create(description: Faker::Quote.yoda, user_id: 2, post_id: 2)
# Comment.create(description: Faker::Quote.yoda, user_id: 1, post_id: 1)




puts "seeding done✅"