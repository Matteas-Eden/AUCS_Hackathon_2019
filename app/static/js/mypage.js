function submit_keyword(){

    used_keywords = []


    var input = document.getElementById('keywords').value;

    if (input == "") {
        window.alert("You must enter keyword")
      }
    else {
        var add_keyword = document.getElementById('keyword_tags');
        var length = add_keyword.length;
        add_keyword.innerHTML += "<li id=eachInterest>" + input + "<button id='delete'  onclick='removeTask()' >X</button></li>";
        wordSize();

    }

}

function removeTask() {
    event.currentTarget.parentElement.remove();
  }

// function wordSize(){
//     var p_tags = document.getElementsById('keyword_tags');
//     var colors = [{
//         name: 'yellow',
//         value: '#FAF7C7',
//         word_count: {
//             min: 1,
//             max: 2
//         }
//         },{
//         name: 'purple',
//         value: '#FCD6F9',
//         word_count: {
//             min: 3,
//             max: 4
//         }
//         },{
//         name: 'red',
//         value: '#F8BBB3',
//         word_count: {
//             min: 5,
//             max: 5
//         }
//         },{
//         name: 'green',
//         value: '#C2F6C4',
//         word_count: {
//             min: 6,
//             max: 9
//         }
//         },{
//         name: 'blue',
//         value: '#A5EDEB',
//         word_count: {
//             min: 10,
//             max: 9999
//         }
//     }]
// }