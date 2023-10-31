var alter = 0

function verificar()
{
    console.log(alter)

    if(alter%2==0) {
        document.body.style.background = "#000000"
    } else {
        document.body.style.background = "#00000000"
    }

    alter++

}