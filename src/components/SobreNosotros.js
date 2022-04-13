import '../assests/styles/SobreNosotros.scss';
const SobreNosotros = ()=>{
    return(
        <div className='SobreNosotro'>
           
                <div className='contenedore_nosotros'>
                        <div>
                            <div>
                                <h2>Quiénes Somos?</h2>
                            </div>
                            <div className='sobrenosotros-content'>
                                <h3>Somos <span>SafeTuri</span></h3>
                                <p>
                                    SafeTuri es una aplicación que permitirá a los turistas y residentes reportar de manera inmediata, a través de un botón de pánico, a las autoridades turísticas de cualquier accidente o suceso ocurrido en el momento. Por igual, la inclusión de llevar un seguimiento de la ubicación actual de las distintas unidades y patrullas dentro de la zona turística para asegurar la presencia de las autoridades a los turistas es de suma importancia para poder brindarle una experiencia de calidad y segura. De manera similar, buscamos presentar la ubicación de los distintos centros de importancia, incluyendo sus informaciones de contacto, para los turistas en caso de emergencias, como son los centros policiales y hospitales ubicados dentro de la Zona Colonial.
                                </p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <i className='bx bxs-quote-alt-right'></i>
                                    <p>
                                    “Ley y Orden, salvaguardando la seguridad ciudadana en todo el territorio nacional”
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>

        </div>
    )
}


export default SobreNosotros;