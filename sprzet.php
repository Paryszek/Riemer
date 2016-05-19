<!DOCTYPE HTML>
<html lang="pl">
<head>
<title></title>
<?php require_once 'include/meta.php'; ?>
<style>
p{
    font-size:120%;   
    
}
h1{
    font-size:200%;   
}
h2{
    margin:0;
    padding:0;
}
.sprzet{
    margin-top:20px;
    margin-bottom:20px;
    text-shadow:2px 2px 3px #000000; 
    color:#46A0D5;
    font-weight:900;
    letter-spacing: 2px;
    font-size:300%;  
}
    #content img{
        
        width:65%;
        height:auto;
        border:5px solid #ffffff;
    }
</style>
</head>
<body>
	<div id="container">
		<?php require_once 'include/header.php'; ?>
		<div id="content">
			<div class="title">
				<i class="icon-info-circled"></i>  Nasze wyposażenie
			</div>
            <div style="text-align:center; float:left; width:480px">
                <h1 class="sprzet">Nasze samoloty</h1>
                    <h1>Beechcraft BARON 58</h1>
                    <img src="obrazy/sprzet/1.jpg" />
                    <p>
                    Dwusilnikowy / Dolnopłat<br />
                        Prędkość przelotowa: 300km/h<br />
                        Ilość pacjentów:<br />
                        3 osoby niewymagające pozycji leżącej<br />
                        1 osoba w pozycji leżącej
                    </p>
            
                    <h1>Piper Seneca PA-34</h1>
                    <img src="obrazy/sprzet/2.jpg" />
                    <p>
                    Dwusilnikowy / Dolnopłat<br />
                        Prędkość przelotowa: 270km/h<br />
                        Ilość pacjentów:<br />
                        3 osoby niewymagające pozycji leżącej<br />
                    </p>
            
                
                    <h1>Cessna 206 Stationair</h1>
                    <img src="obrazy/sprzet/3.jpg" />
                    <p>
                    Jednosilnikowy / Górnopłat<br />
                        Prędkość przelotowa: 270km/h<br />
                        Ilość pacjentów:<br />
                        3 osoby niewymagające pozycji leżącej<br />
                    </p>
            </div>
               <div style="text-align:center; float:left; width:480px;">

                <h1 class="sprzet">Nasze pojazdy</h1>
                <h1>Ambulans Mercedes Sprinter 319</h1>
                   <img src="obrazy/sprzet/4.jpg" />
                   <p>Moc silnika: 163/190 KM<br />
                      Wersja: specjalistyczna<br />
                      Rok produkcji: 2011<br />
                      Ilość: 4
                   </p>
                <h1>Ambulans Mercedes Sprinter 319</h1>
                   <img src="obrazy/sprzet/5.jpg" />
                   <p>Moc silnika: 163/190 KM<br />
                      Wersja: specjalistyczna - zabudowa kontenerowa<br />
                      Rok produkcji: 2010<br />
                      Ilość: 3
                   </p>
                <h1>Ambulans Renault Trafic</h1>
                   <img src="obrazy/sprzet/6.jpg" />
                   <p>Moc silnika: 115 KM<br />
                      Wersja: podstawowa<br />
                      Rok produkcji: 2014<br />
                      Ilość: 2
                   </p>
                <h1>Ambulans Volkswagen Crafter</h1>
                   <img src="obrazy/sprzet/7.jpg" />
                   <p>Moc silnika: 163 KM<br />
                      Wersja: specjalistyczna<br />
                      Rok produkcji: 2009<br />
                      Ilość: 1
                   </p>
                      

               
            </div>
            <div style="clear:both;"></div>
            <div style="text-align:center;">
                 <a class="btn" href="skontaktuj-sie-z-nami">Skontaktuj się z nami</a>
                 <a class="btn" href="co-nowego-slychac">Sprawdź co u nas słychać</a>
                 <a class="btn" href="centrum-medyczne-galeria">Zobacz naszą galerie</a>
                 <a class="btn" href="czym-jest-centrum-riemer">Poznaj nas lepiej</a>
            </div>
		</div>
		<?php require_once 'include/footer.php'; ?>
	</div>
<script type="text/javascript" src="script/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="script/main.js"></script>	   
</body>
</html>
