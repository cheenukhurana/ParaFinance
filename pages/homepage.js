import Button from '@mui/material/Button';

const handleConnectWallet = e => {
    console.log('connect wallet clicked')
}

export default function homepage(){
    return (
        <div>
            <Button variant="contained" onClick={handleConnectWallet}>Connect Wallet</Button>
        </div>
        
    )
}