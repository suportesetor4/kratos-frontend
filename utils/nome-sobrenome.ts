export default function nomeSobrenome(nomeCompleto: (string | undefined)){
    if(nomeCompleto){

        try{
            const nomeSobrenome = nomeCompleto.split(" ")[0][0].toUpperCase() + nomeCompleto.split(" ")[1][0].toUpperCase()
            return nomeSobrenome
            
        } catch(error){
            console.log(error)
            return nomeCompleto[0].toUpperCase()
        }
        
    }

    return ""
}