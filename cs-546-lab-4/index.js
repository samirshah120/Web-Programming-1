const animals = require("./data/animals");
const connection = require("./mongoConnection")
async function main(){
     let Sasha
     try{
         Sasha = await animals.create("Sasha","Dog");
         console.log(Sasha);
    }
    catch(error){
        console.log(error)
    }
    let Lucy
    try{
    Lucy = await animals.create("Lucy","Dog");
    console.log(Lucy);
    }
    catch(error)
    {
        console.log(error)
    }
    try{

        const allAnimals = await animals.getAll();
        console.log(allAnimals);
    }
    catch(error){
        console.log(error)
    }
    try{

        const Duke = await animals.create("Duke","Walrus");
        console.log(Duke);
        }
        catch(error)
        {
            console.log(error)
    }

    try{
        const Sashita = await animals.rename("5e57459fe8b03950105fd223","Sashita");
        console.log(Sashita);
        }
        catch(error)
        {
        console.log(error)
        }

        try{
            const removeLucy = await animals.remove("5e57459fe8b03950105fd224");
            console.log(Lucy);
            }
            catch(error)
                {
             console.log(error)
            }

            try{

                const allAnimals = await animals.getAll();
                console.log(allAnimals);
            }
            catch(error){
                console.log(error)
            }
            try
            {
            const db = await connection();
            await db.serverConfig.close();
            }
            catch(error)
            {
                console.log(error);
            }


}
main()