<?php 
    function SendMail($where,$topic,$description,$header){
        if(mail($where,$topic,$description,$header)){
        }else{
            echo "Error while trying to send an e-mail!";
        }
    }
    $potwierdzenie = false;
    if($_POST['imie'] != '' AND $_POST['nazwisko'] != '' AND $_POST['kontakt'] != '' AND $_POST['wiadomosc'] != '' AND $_POST['option'] != '')
    {
        $imie = $_POST['imie'];
        $nazwisko = $_POST['nazwisko'];
        $kontakt = $_POST['kontakt'];
        $tresc = $_POST['wiadomosc'];
        $temat = "Nowa wiadomość ze strony riemer.gr";
        $header = "Content-type: text/plain; charset=utf-8";
        $header .= "Nowa wiadomość ze strony riemer.gr\r\n";
        $header .= "Od $imie $nazwisko\r\n";
        $header .= "Kontakt: $kontakt\r\n";
                $gdzie = "michal.parysz@yahoo.com";
                $gdzie1 = "karol.maluga@riemer.gr";
                $gdzie2 = "jacek.trzeciak@riemer.gr";
                $gdzie3 = "biuro@riemer.gr";
                $gdzie4 = "medyczny@riemer.gr";
                $gdzie5 = "kontakt@riemer.gr";
        $opcja = $_POST['option'];
       switch($opcja){
           case 1:{
               SendMail($gdzie,$temat,$tresc,$header);
               SendMail($gdzie1,$temat,$tresc,$header);
               SendMail($gdzie2,$temat,$tresc,$header);
               SendMail($gdzie3,$temat,$tresc,$header);
               SendMail($gdzie4,$temat,$tresc,$header);
               SendMail($gdzie5,$temat,$tresc,$header);
            }break;
           case 2:{
               SendMail($gdzie,$temat,$tresc,$header);
               SendMail($gdzie1,$temat,$tresc,$header);
               SendMail($gdzie2,$temat,$tresc,$header);
               SendMail($gdzie3,$temat,$tresc,$header);
               SendMail($gdzie4,$temat,$tresc,$header);
               SendMail($gdzie5,$temat,$tresc,$header);
           }break;
            case 3:{
               SendMail($gdzie,$temat,$tresc,$header);
               SendMail($gdzie1,$temat,$tresc,$header);
               SendMail($gdzie2,$temat,$tresc,$header);
               SendMail($gdzie3,$temat,$tresc,$header);
               SendMail($gdzie4,$temat,$tresc,$header);
               SendMail($gdzie5,$temat,$tresc,$header);
           }break;
            case 4:{
               SendMail($gdzie,$temat,$tresc,$header);
           }break;
                
       }
        $potwierdzenie = true;
        header("Refresh: 5; url=skontaktuj-sie-z-nami");
    }
?>
