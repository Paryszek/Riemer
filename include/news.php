<?php 
    $polaczenie = new mysqli($host,$db_user,$db_password,$db_name);
    $polaczenie->set_charset("utf8");
    $kolumny = $polaczenie->query("SELECT * FROM news WHERE 1");
    $flaga = 0;
    $flaga2 = 0;
    if($polaczenie->connect_errno!=0){
/*Nie udane polaczenie*/
        echo "Error: ".$polaczenie->connect_errno."Opis: ".$polaczenie->connect_error;  
    }
    else{
/*Udane polaczenie*/
        $flaga = 1;
    }
/*Kontrola anty spamowa
    switch(rand(1,10)){
            case 1:  { $token = "843092"; }
                break;
            case 2:  { $token = "235283"; }
                break;    
            case 3:  { $token = "163815"; }
                break;    
            case 4:  { $token = "194292"; }
                break;    
            case 5:  { $token = "859372"; }
                break;    
            case 6:  { $token = "019293"; }
                break;    
            case 7:  { $token = "820553"; }
                break;    
            case 8:  { $token = "691023"; }
                break;    
            case 9:  { $token = "426189"; }
                break;    
            case 10: { $token = "312323"; }
                break;
            default: { $token = "283882"; }
                break;
        }*/
/*dodawanie komentarza*/

    if($_POST['tekst'] != '' AND $_POST['id'] != '') 
    {
        if($_POST['autor'] == ''){
            $autor = 'anonim';
        }else{
            $autor = htmlentities($_POST['autor']);
        }
        $id_kom = $_POST['id'];
        $tekst = htmlentities($_POST['tekst']);
        $polaczenie->query("INSERT INTO comments(id, id_komentarz, autor, tekst, data) VALUES (DEFAULT,'$id_kom','$autor','$tekst',CURRENT_DATE)");
    }else{
        $flaga2 = $_POST['id'];
    }
?>