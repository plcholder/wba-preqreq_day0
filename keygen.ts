import { Keypair } from "@solana/web3.js";
import  bs58  from "bs58";

//Generate a new keypair
let kp = Keypair.generate()
console.log(`you've generated a new solana wallet: ${kp.publicKey.toBase58()}   to save your wallet, copy and paste the following into a json file: [${kp.secretKey}]`)


//to change my phantom pk to bytearray
let decodekp = bs58.decode("")
console.log('pk has been decoded to bytearray, copy this to json file:',decodekp)

