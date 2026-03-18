const books = {
    title: 'Kelechi Temple',
    description: 'A story of Religion and Tough Times',
    numberOfPages: 34,
    author: 'Kelechi Umunna',
    reading: 'True',
    toggleReadingStatus: function(){
        if(books.reading===true) {
            books.reading= false
        } else {
            books.reading= true
        }
    }

}
console.log(books.reading)
