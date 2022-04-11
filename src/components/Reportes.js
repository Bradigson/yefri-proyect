import ReportesDatos from '../datos/reportes.json';
import '../assests/styles/Reportes.scss';

const Reportes = ()=>{
    const getDatos = ReportesDatos;
    return(
       <div className='Reportes'>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Hospital</th>
                        <th>Centro</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        getDatos.map(data=>{
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.Usuario}</td>
                                    <td>{data.Hospital}</td>
                                    <td>{data.Centro}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            <table className="table">
                    <thead className="table-dark">
                        <tr>
                            
                            <th>Unidades</th>
                            <th>Fecha Peticion</th>
                            <th>UbyPeticion</th>
                            <th>UbxPeticion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getDatos.map(data=>{
                                return(
                                    <tr>
                                        <td>{data.Unidades}</td>
                                        <td>{data['Fecha Peticion']}</td>
                                        <td>{data.UbyPeticion.slice(0,9)}</td>
                                        <td>{data.UbxPeticion.slice(0,9)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </table>
       </div>
    )
}


export default Reportes;