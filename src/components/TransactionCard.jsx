function TransactionCard({name,amount,type}){

const color = amount.includes("-")
? "red"
: "green";

return(
<div className="transaction-card">

<div>
<h4>{name}</h4>
<p>{type}</p>
</div>

<h4 style={{color}}>
{amount}
</h4>

</div>
)

}

export default TransactionCard;