var alter = 0

function verificar()
{
    console.log(alter)

    if(alter%2==0)
    {
        console.log("cu")
        document.body.style.background = "#000000"
    } 
    else
    {
        console.log("ainn")
        document.body.style.background = "#00000000"
    }

    alter++

}