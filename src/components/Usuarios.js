import UsuariosDatos from '../datos/usuarios.json';
import '../assests/styles/Usuarios.scss';
const Usuarios = ()=>{
    const getUsuarios = UsuariosDatos;
    return(
        <div className='usuarios'>
            <table className="table table-striped table-hover">
                <thead className="table-header">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Puesto</th>
                        <th>Rango</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getUsuarios.map(data=>(
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.Nombre}</td>
                                <td>{data.Apellido}</td>
                                <td>{data.Puesto}</td>
                                <td>{data.Rango}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}


export default Usuarios;