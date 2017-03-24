<?php
    function sendMail($where,$topic,$description,$messageHeader){
        if(mail($where,$topic,$description,$messageHeader)){
        }else{
            echo "Error while trying to send an e-mail!";
        }
    }
    $sentSuccess = false;
    if($_POST['imie'] != '' AND $_POST['nazwisko'] != '' AND $_POST['kontakt'] != '' AND $_POST['wiadomosc'] != '' AND $_POST['option'] != '')
    {
        $contactsFirstName = $_POST['imie'];
        $contactsSecondName = $_POST['nazwisko'];
        $contactsInfo = $_POST['kontakt'];
        $messageDescription = $_POST['wiadomosc'];
        $messageTopic = "Nowa wiadomość ze strony riemer.gr";
        $messageHeader = "Content-type: text/plain; charset=utf-8";
        $messageHeader .= "Nowa wiadomość ze strony riemer.gr\r\n";
        $messageHeader .= "Od $contactsFirstName $contactsSecondName\r\n";
        $messageHeader .= "Kontakt: $contactsInfo\r\n";
                $sendToFirst = "michal.parysz@yahoo.com";
                $sendToSecond = "karol.maluga@riemer.gr";
                $sendToThird = "jacek.trzeciak@riemer.gr";
                $sendToFourth = "biuro@riemer.gr";
                $sendToFifth = "medyczny@riemer.gr";
                $sendToSixth = "kontakt@riemer.gr";
                $sendToSeven = "praca@riemer.gr";
                $sentToEight = "magda.lenartowicz@riemer.gr";
        $option = $_POST['option'];
       switch($option){
           case 1:{
               sendMail($sendToSecond,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToThird,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFourth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFifth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToSixth,$messageTopic,$messageDescription,$messageHeader);
            }break;
           case 2:{
               sendMail($sendToSecond,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToThird,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFourth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFifth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToSixth,$messageTopic,$messageDescription,$messageHeader);
           }break;
            case 3:{
               sendMail($sendToSecond,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToThird,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFourth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFifth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToSixth,$messageTopic,$messageDescription,$messageHeader);
           }break;
            case 4:{
               sendMail($sendToSeven,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sentToEight,$messageTopic,$messageDescription,$messageHeader);
           }break;
            case 5:{
               sendMail($sendToFirst,$messageTopic,$messageDescription,$messageHeader);
           }break;
           case 6:{
               sendMail($sendToSecond,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToThird,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFourth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFifth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToSixth,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToFirst,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sendToSeven,$messageTopic,$messageDescription,$messageHeader);
               sendMail($sentToEight,$messageTopic,$messageDescription,$messageHeader);
           }break;

       }
        $sentSuccess = true;
        Header("Refresh: 5; url=skontaktuj-sie-z-nami");
    }
?>
