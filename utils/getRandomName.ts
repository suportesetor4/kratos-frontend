export default function getRandomName(){
    const names = [
        "cleberson", 
        "elson", 
        "santos", 
        "esdras",
        "victor",
        "fabio", 
        "manoel", 
        "aunibson", 
        "linhares", 
        "gabriel", 
        "brenda",
        "lucas",
        "luisa",
        "whalyson",
        "daniel",
    ]

    const randomNumber = Math.floor(Math.random() * names.length) - 1

    return names[randomNumber]
}