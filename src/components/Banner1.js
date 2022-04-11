import '../assests/styles/Banner1.scss';
import PoliciaLogo from '../assests/imgs/logo1.jpeg';
const Banner1 = ()=>{
    return(
        <article className='Banner1'>
            <section className='Banner1__section1'>
                <div className='Banner1-section1__img'>
                    <img src={PoliciaLogo} alt=''/>
                </div>
                

            </section>
            <section className='Banner1-section2 mt-5'>
                <div className='Banner1-section2__content text-center text-muted'>
                    <i className='bx bxs-check-shield'></i>
                    <h3>Tu Seguridad Es Nuestro Trabajo</h3>
                </div>
            </section>
        </article>
    )
}


export default Banner1;