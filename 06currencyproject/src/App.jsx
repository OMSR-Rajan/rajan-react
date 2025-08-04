import { useState } from 'react'
import { InputBox } from './componets'
import useCurrencyInfo from './hooks/useCurrency'



function App() {

  const [amount, setAmount] = useState(0);
  const [from , setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [conertedAmount, setConvertedAmount] = useState(0);

  const curencyInfo = useCurrencyInfo(from);

  const options = Object.krys(curencyInfo)
  
  const swape = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(conertedAmount)
  } 

  const convert = () => {
    setConvertedAmount((amount * curencyInfo[to]));
  }

  return (
    <div className='w-full h-screen flex flex-wrap items-center justify-center bg-cover bg-no-repeat' style={{bacjgroundImage: `url('https://www.whoa.in/download/bicycle-hd-wallpapers---background-images--cyclist-1080p-2k-4k-5k-hd-wallpapers-free-download')`,}}>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 background-blur-sm bg-white/30 shadow-lg'>
          <form 
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          >
            <div className='w-full mb-1'>

              <InputBox 
              label="Form"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectedCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              />

            </div>
            <div className='relative w-full h-0.5'>

              <button 
              type='button'
              className='absolute left-1/2-translate-x-1/2-translate-y-1/2 bg-white rounded-mg bg-blue-600 text-white px-2 py-0.5'
              onClick={swape}>
                swape
              </button>
            </div>

            <div className='w-full mb-4 mt-1'>
              <InputBox 
              label="To"
              amount={conertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={from}
              amountDisabled
              />

            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg '>
              Convert {from.toUpperCase()} to {to.toUpperCase()}   

            </button>

          
          </form>

        </div>

      </div>

    </div>
  )
}

export default App
