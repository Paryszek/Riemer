<!DOCTYPE HTML>
<?php
    require_once 'include/mail.php';
?>
<html lang="pl">
<head>
<title></title>
<?php require_once 'include/meta.php'; ?>
<link rel="stylesheet" type="text/css" href="css/contact.css">
</head>
<body>
	<div id="container">
		<?php require_once 'include/header.php'; ?>
		<div id="content">
			<div class="title">
				<i class="icon-mail"></i> Kontakt
			</div>
            <div class="contactForm">
                <p style="margin-left:5px;">W celu skontaktowania się z nami wypełnij formularz</p>
                <form method="POST" action="skontaktuj-sie-z-nami">
                    <input class="contactInputOne" type="text" name="imie" placeholder="Proszę podać imię" value="" />
                    <input class="contactInputTwo" type="text" name="nazwisko" placeholder="Proszę podać nazwisko" value="" /><div class="contactCounterOne">40</div><div class="contactCounterTwo">40</div><br /><div style="clear:both;"></div>
                    <input class="contactInputThree" type="text" name="kontakt" placeholder="Proszę podać swój adres email" value="" /><div class="contactCounterThree">40</div><br /><div style="clear:both;"></div>
                    <textarea class="contactInputFour" name="wiadomosc" rows="3" placeholder="Proszę podać treść wiadomości"></textarea><div class="contactCounterFour">2000</div><br /><div style="clear:both;"></div>
                     <select name="option" style="margin-left:5px;">
                      <option value="1">Oferta transportu</option>
                      <option value="2">Oferta zabezpieczenia</option>
                      <option value="3">Oferta szkolenia</option>
                      <option value="4">Oferta pracy</option>
                      <option value="5">Kontakt z administratorem strony</option>
                      <option value="6">Inne</option>
                    </select>
                    <input class="contactInputFive" type="submit" value="Zatwierdź"/><input class="contactInputSix" type="button" value="Reset" /><?php
              if($sentSuccess == true) {
                  echo '<br /><font style="color:green;">Wiadomość została pomyślnie wysłana</font>';
              }
                    ?>
                </form>
            </div>
            <div class="contactInfo">
                <p style="margin-left:5px;">Nasze dane kontaktowe</p>
                <p class="officeLocation">
                    <div style="margin-left:25px; margin-bottom:15px;">
                        Centrum Medyczne Riemer<br/>
                        ul. Powstańców Śląskich 127 lok.220<br />
                        01-355 Warszawa<br />
                        <b>biuro@riemer.gr</b>
                        <br />
                    </div>
                <div class="currentPhoneNumber" style="margin-left:5px; padding:0;">Numery telefonu</div><br />
                    <ul style="margin:0;">
                        <li>502 695 838</li>
                        <li>22 746 32 88</li>
                    </ul>
                </p>
            <p style="margin-left:5px;">Dane do faktury</p>
            <p class="dane">
                <div style="margin-left:25px; margin-bottom:15px;">
                    Centrum Medyczne Riemer S.J.<br />
                    ul. Sowińskiego 28<br />
                    05-825 Grodzisk Mazowiecki<br />
                    NIP: 529-16-19-183
            </div>
            </p>
            </div>
            <div style="clear:both;"></div>
            <div class="mapToggle">Gdzie nas znaleźć?</div>
              <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5288.99608729717!2d20.928573749670125!3d52.263650381558385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eca4d25f44d53%3A0x68d2552c5eabc0ec!2zUG93c3RhxYRjw7N3IMWabMSFc2tpY2ggMTI4LCAwMS0zODEgV2Fyc3phd2E!5e0!3m2!1spl!2spl!4v1464169891111" width="960" height="0" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        <?php require_once 'include/footer.php'; ?>
	</div>
<script type="text/javascript" src="script/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="script/main.js"></script>
<script type="text/javascript" src="script/contact.js"></script>
</body>
</html>
