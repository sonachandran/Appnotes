let row=5;
for(let i=row;i>0;i--){
    for(let j=i;j<row;j++){
        document.write("&nbsp")
    }
    for(let j=0;j<i;j++){
        document.write('*')
    }
    document.write("<br>")  
}
for(let i=0;i<=row;i++){
    for(let j=i;j<row;j++){
        document.write("&nbsp")
    }
    for(let j=0;j<i;j++){
        document.write('*')
    }
    document.write("<br>")
}

