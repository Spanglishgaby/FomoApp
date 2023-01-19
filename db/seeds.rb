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

# Userboard.create(user_id:1,board_id:1)
# Userboard.create(user_id:1,board_id:2)
# Userboard.create(user_id:1,board_id:3)
# Userboard.create(user_id:2,board_id:1)
# Userboard.create(user_id:3,board_id:1)

Post.create(url: "https://images.unsplash.com/photo-1673981838065-0772d481a01f", user_id:2,board_id:2)
Post.create(url: "https://images.unsplash.com/photo-1673899241519-827fe0d06103",  user_id: 2,board_id:2)
Post.create(url: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7", user_id: 3,board_id:3)
Post.create(url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",user_id: 3,board_id:3)
Post.create(url: "https://images.unsplash.com/photo-1673968873206-ceb16421a803",  user_id: 2,board_id:3)
Post.create(url: "https://images.unsplash.com/photo-1670932723633-75c68292c548", user_id:2,board_id:4)
Post.create(url: "https://images.unsplash.com/photo-1655070250012-5eb6cb5ecc62",  user_id: 3,board_id:4)
Post.create(url: "https://images.unsplash.com/photo-1670012015063-14a6f2102a50", user_id: 4,board_id:5)
Post.create(url: "https://images.unsplash.com/photo-1673203570783-b9e965cdf01a",user_id: 4,board_id:5)
Post.create(url: "https://images.unsplash.com/photo-1673942012605-17df07c724fc",  user_id: 3,board_id:4)

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