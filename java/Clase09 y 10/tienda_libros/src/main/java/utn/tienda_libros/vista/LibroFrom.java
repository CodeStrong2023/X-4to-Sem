package utn.tienda_libros.vista;

import com.sun.org.apache.xpath.internal.functions.FuncFalse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sun.jvm.hotspot.types.CIntegerField;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

@Component
public class LibroFrom extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField idTexto;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private JButton button1;
    private JButton button2;
    private JButton button3;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio){
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener (e -> agregarLibro());
        tablaLibros.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
                cargarLibroSeleciconado();
            }
        });
        button2.addActionListener(e -> modificarLibro());
        button3.addActionListener(e -> eliminarLibro());
            }



    private void iniciarForma(){
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()/2);
        int y = (tamanioPantalla.height - getWidth()/2);
        setLocation(x, y);
    }

    private void agregarLibro(){
        //Leer los valores del formulario
        if (libroTexto.getText().equals("")){
            mostrarMensaje("Ingresa el nombre del libro");
            libroTexto.requestFocusWindow();
            return;
        }
        var nombreLibro = libroTexto.getText();
        var autor = autorTexto.getText();
        var precio = Double.parseDouble(precioTexto.getText());
        var existencias = integer.parseInt(existenciasTexto.getText());
        //Creamos el objeto libro
        var libro = new Libro(null, nombreLibro, auto, precio, existencias);
        //libro.setNombreLibro(NombreLibro);
        //libro.setAutor(autor);
        //libro.setPrecio(precio);
        //libro.setExistencias(existencias);
        this.libroServicio.guardarLibro(libro);
        mostrarMensaje("Se agregó el libro.");
        limpiarFormulario();
        listarLibros();
    }

    private void cargarLibroSeleciconado(){
        //Los indices de las columnas comienzan en 0
        var renglon = tablaLibros.getSelectedRow();
        if(renglon != -1){
            String idLibro = tablaLibros.getModel().getValueAt(renglon, 0).toString();
            idTexto.setText(idLibro);
            String nombreLibro =
                    tablaLibros.getModel().getValueAt(renglon, 1).toString();
            libroTexto.setText(nombreLibro);
            String autor =
                    tablaLibros.getModel().getValueAt(renglon, 2).toString();
            libroTexto.setText(autor);
            String precio =
                    tablaLibros.getModel().getValueAt(renglon, 3).toString();
            libroTexto.setText(precio);
            String existencias =
                    tablaLibros.getModel().getValueAt(renglon, 4).toString();
            libroTexto.setText(existencias);
        }
    }

    private void modificarLibro(){
        if(this.idTexto.equals("")){
            mostrarMensaje("Debes seleccionar el registro en la tabla");
        }
        else {
            //Verificamos que el nombre del libro no sea nulo
            if (libroTexto.getText().equals("")){
                mostrarMensaje("Digite el nombre del libro");
                libroTexto.requestFocusInWindow();
                return;
            }
            //Llenamos el objeto libro a actualizar
            int idLibro = Integer.parseInt(idTexto.getText());
            var nombreLibro = libroTexto.getText();
            var autor = autorTexto.getText();
            var precio = Double.parseDouble(precioTexto.getText());
            var existencias = Integer.parseInt(existenciasTexto.getText());
            var libro = new Libro(idLibro, nombreLibro, autor, precio, existencias);
            LibroServicio.guardarlibro(libro);
            mostrarMensaje("Se modifico el libro");
            limpiarFormulario();
            listarLibros();
        }
    }

    private void eliminarLibro(){
        var renglon = tablaLibros.getSelectedRow();
        if(renglon != -1){
            String idLibro =
                    tablaLibros.getModel().getValueAt(renglon, 0).toString();
            var libro = new Libro();
            libro.setIdLibro(Integer.parseInt(idLibro));
            libroServicio.eliminarLibro(libro);
            mostrarMensaje("Libro"+idLibro+" eliminado");
            limpiarFormulario();
            listarLibros();
        }
        else {
            mostrarMensaje("No se ha seleccionado ningun libro de la tabla a eliminar");
        }
    }

    private void limpiarFormulario(){
        libroTexto.setText("");
        autorTexto.setText("");
        precioTexto.setText("");
        existenciasTexto.setText("");
    }

    private void mostrarMensaje(String mensaje){
        JOptionPane.showMessageDialog(this, mensaje);
    }

    private void createUIComponents() {
        idTexto = new JTextField("");
        idTexto.setVisible(false);
        this.tablaModeloLibros = new DefaultTableModel(0, 5) {
            @Override
            public boolean isCellEditable(int row, int column) {
                return false;
            }
        };
        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        //Instanciar el objeto de JTable
        this.tablaLibros = new JTable(tablaModeloLibros);
        //Evitamos que se seleccionen varios registros
        tablaLibros.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        listarLibros();
    }

    private void listarLibros(){
        //Limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        //Obtener los libros de la BD
        var libros = libroServicio.listarLibros();
        //Iteramos cada libro
        libros.forEach((libro) ->{ //Funcion Lambda
            //Creamos cada registro para agregarlos a la tabla
            Object [] renglonLibro = {
                    libro.getIdLibro(),
                    libro.getNombreLibro(),
                    libro.getAutor(),
                    libro.getPrecio(),
                    libro.getExistencias()
            };
            this.tablaModeloLibros.addRow(renglonLibro);

        });
    }
}
