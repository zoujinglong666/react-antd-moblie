import './App.css'
import { CapsuleTabs} from 'antd-mobile'
function App() {
  return (
    <>
      <CapsuleTabs>
        <CapsuleTabs.Tab title='水果' key='fruits'>
          菠萝
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title='蔬菜' key='vegetables'>
          西红柿
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title='动物' key='animals'>
          蚂蚁
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    </>
  )
}

export default App
