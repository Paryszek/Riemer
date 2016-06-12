<?php
    $connect = new mysqli($host,$db_user,$db_password,$db_name);
    $connect->set_charset("utf8");
    $columns = $connect->query("SELECT * FROM news WHERE 1");
/*Nie udane polaczenie*/
    if($connect->connect_errno!=0){
        echo "Error: ".$connect->connect_errno."Opis: ".$connect->connect_error;
    }
    else{
/*Udane polaczenie*/
        $successConnect = 1;
    }
/*dodawanie komentarza*/
    if($_POST['tekst'] != '' AND $_POST['id'] != '')
    {
        if($_POST['autor'] == ''){
            $autor = 'anonim';
        }else{
            $autor = htmlentities($_POST['autor']);
        }
        $commentID = $_POST['id'];
        $text = htmlentities($_POST['tekst']);
        $connect->query("INSERT INTO comments(id, id_komentarz, autor, tekst, data) VALUES (DEFAULT,'$commentID','$autor','$text',CURRENT_DATE)");
    }else{
        $errorComment = $_POST['id'];
    }
?>
