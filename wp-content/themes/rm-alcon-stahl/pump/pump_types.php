<?php
    namespace Pump;

    /**
     * Achive database connection
     * 
     * @return Object - Connection object
     */
    function get_database_connection() {

        // Connect with database
        $conn = new \mysqli("localhost", "root", "", "rm_alcon_stahl");

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        return $conn;

    }


    /**
     * Get all pumps from database
     * 
     * @return Object - Object with pumps
     */
    function get_pump_types() {

        // Connect with database
        $conn = get_database_connection();

        // Get all pump types
        $sql = "SELECT id, name, description, image FROM pump_types";

        return $conn->query($sql);

    }


    /**
     * Get subtypes by pump type
     * 
     * @param int $type_id
     * 
     * @return \mysqli_result
     */
    function get_subtypes_by_type($type_id) {

        $conn = new \mysqli("localhost", "root", "", "rm_alcon_stahl");

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT id, name FROM pump_subtypes WHERE type_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('i', $type_id);
        $stmt->execute();
        return $stmt->get_result();

    }


    /**
     * Get pumps by pump type
     * 
     * @param int $type_id
     * 
     * @return \mysqli_result
     */
    function get_pumps_by_type($type_id) {

        $conn = new \mysqli("localhost", "root", "", "rm_alcon_stahl");

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT id, name, description, image FROM pumps WHERE type_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('i', $type_id);
        $stmt->execute();
        return $stmt->get_result();

    }


    /**
     * Get pumps by pump subtype
     * 
     * @param int $subtype_id
     * 
     * @return \mysqli_result
     */
    function get_pumps_by_subtype($subtype_id) {

        $conn = new \mysqli("localhost", "root", "", "rm_alcon_stahl");

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT id, name, description, image FROM pumps WHERE subtype_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('i', $subtype_id);
        $stmt->execute();
        return $stmt->get_result();

    }

?>