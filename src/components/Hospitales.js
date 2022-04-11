import HospitalesDatos from '../datos/hospitales.json';
import '../assests/styles/Hospitales.scss';
const Hospitales = ()=>{

    const getHospitales = HospitalesDatos;
    return(
        <div className='hospitales'>
            <table className="table table-striped table-hover">
                <thead className="table-header">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Ubx</th>
                        <th>Uby</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getHospitales.map(data=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.Nombre}</td>
                                    <td>{data.Ubx}</td>
                                    <td>{data.Uby}</td>
                                    <td>{data.Descripcion}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )

}

export default Hospitales;