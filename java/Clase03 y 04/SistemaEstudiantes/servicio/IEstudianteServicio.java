package utn.estudiantes.servicio;

import java.util.List;

public interface IEstudianteServicio {
    public List<Estudiante> listarEstudiantes();
    public Estudiante buscarEstudiantePorId(Integer IdEstudiante);
    public void guardarEstudiante(Estudiante estudiante);
    public void eliminarEstudiante(Estudiante estudiante);
}