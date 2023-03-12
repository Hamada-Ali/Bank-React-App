import {clients} from '../constants'
import styles from '../style'

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter}  sm:flex-row flex-col flex-wrap w-full`}>
        {clients.map(client => (
          <div key={client.id} className={`flex-1 mt-10 md:mt-0 flex-row ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain '/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients