console.log('Hello');

// array
let bucket_list = ['learn to fly','go to africa','go to japan',788];
console.log(bucket_list[1]);

//for loop
for(i = 0; i < bucket_list.length; i++){
  console.log("-" + bucket_list[i]);
}

let movie_list1 = [
  "1movie",
  "2movie",
  "3movie"
];

let movie_list2 =[
  "12movie",
  "24movie",
  "2movie",
  "6movie",
  "3movie"
];

for(i = 0; i < movie_list1.length; i++){
  for(j = 0; j <movie_list2.length; j++){
    if(movie_list1[i] == movie_list2[j]){
      console.log(movie_list1[i]);
    }
  }
}

//iterator
movie_list1.forEach(movie => console.log(">>" +movie));

//filter
let new_movie_list = movie_list2.filter(movie => movie.slice(0,1) != 2);
console.log(new_movie_list);
