import ReportesDatos from '../datos/reportes.json';
import '../assests/styles/Reportes.scss';

const Reportes = ()=>{
    const getDatos = ReportesDatos;
    return(
       <div className='Reportes'>
            <table className="table  table-striped table-hover">
                <thead className="table-header">
                    <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Hospital</th>
                        <th>Centro</th>
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
                                    <td>{data.id}</td>
                                    <td>{data.Usuario}</td>
                                    <td>{data.Hospital}</td>
                                    <td>{data.Centro}</td>
                                    <td>{data.Unidades}</td>
                                    <td>{data['Fecha Peticion']}</td>
                                    <td>{data.UbyPeticion}</td>
                                    <td>{data.UbxPeticion}</td>
                                   
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