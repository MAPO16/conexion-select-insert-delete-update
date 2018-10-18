function suma(){
	
	let i;
	for(i=0;i<=10;i++)
{
	console.log(`Este es el ciclo for ${ i }`);
}
};

function resta(){
 let i=5;
  while(i<20)
  {

  	console.log(`Este es el ciclo while ${ i }`);
  	i=i+1;
  }
  };

function mayor(){

	let i=1;
	do{
		console.log(`Este es el ciclo do while ${ i }`);
		i=i+2;
	}while(i<4)
    
  };

suma();
resta();
mayor();