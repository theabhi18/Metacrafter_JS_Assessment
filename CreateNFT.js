Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs= []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (a,b,c,d,e) {
    const NFT = {
        "car_name":a,
        "engine_type":b,
        "car_colour":c,
        "max_speed":d,
        "car_price":e,
    }
    NFTs.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++)
        {
            console.log ("\nCar Name:- " + NFTs[i].car_name);
            console.log ("Engine Type:- " + NFTs[i].engine_type);
            console.log ("Car Colour:- " + NFTs[i].car_colour);
            console.log ("Max Speed:- " + NFTs[i].max_speed);
            console.log ("Car Price:- " + NFTs[i].car_price);
        }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log ("\nTotal NFTs are: " + NFTs.length);
}

// call your functions below this line
mintNFT("Toyota Supra", "B58 3L", "Royal Blue", "250 km/hr", "$66,370" );
mintNFT("Nissan GTR", "3.8L V6", "Gradient Red", "330 km/hr", "$132,672" );
mintNFT("Lamborghini Urus", "4.0L V8", "Mettalic Black", "305 km/hr", "$229,268" );
mintNFT("Bugatti Chiron", "8.0L W6", "Neon Yellow", "489 km/hr", "$2,990,000" );
listNFTs();
getTotalSupply();
