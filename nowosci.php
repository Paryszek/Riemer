<!DOCTYPE HTML>
<?php
    require_once "cfg/config.php";
    require_once "include/news.php";
?>
<html lang="pl">
<head>
<title></title>
<?php require_once 'include/meta.php'; ?>
<link rel="stylesheet" type="text/css" href="css/news.css">
</head>
<body>
	<div id="container">
		<?php require_once 'include/header.php'; ?>
		<div id="content">
			<div class="title">
				<i class="icon-newspaper"></i> Nowości
			</div>
            <?php
                if($successConnect != 0)
                {
                    for($i = $columns->num_rows;$i >= 1;$i--){
                        $resultNews = $connect->query("SELECT * FROM news WHERE id='$i'");
                        $resultComment = $connect->query("SELECT * FROM comments WHERE id_komentarz='$i'");
                        $takeNews = $resultNews->fetch_assoc();
                           if($i == 1){
                            echo '<div class="artykuly">
                                    <div class="naglowek">'.$takeNews['tytul'].'</div>
                                    <div class="data">'.$takeNews['data'].'</div>
                                    <div style="clear:both;"></div>
                                    <p class="opis">'.$takeNews['tekst'].'</p>
                                        <form class="komentarz aktualny_p" method="POST" action="nowosci.php">
                                            <input type="text" style="display:none;" name="id" value="'.$i.'" />
                                            <textarea name="tekst" class="pisz" rows="2" placeholder="Co Ci chodzi po głowie?"></textarea><i class="icon-left-open"></i>
                                            <div style="clear:both;"></div>
                                            <input class="autor" rows="2" type="text" name="autor" placeholder="Chcesz się przedstawić?" value="" />
                                            <input class="przycisk" type="submit" value="Zatwierdź" />
                                            <input class="reset" type="button" value="Reset" />
                                            <div class="licznik">140</div><div class="licznik2">30</div>
                                            <div style="clear:both;"></div>
                                        </form>
                            ';
                            if($errorComment == 1){ echo '<div class="error">Wysłanie komentarza nie powiodło się!</div>'; }
                             echo '<div class="komm aktualny_k">
                             <div style="width:100%; margin-top:10px; margin-bottom:10px; text-align:center;">
                                    <a class="btn"> Rozwiń komentarze </a>
                             </div>
                             <div class="comm">';
                            for($n = 0;$n < $resultComment->num_rows;$n++){
                                    $takeComment = $resultComment->fetch_assoc();
                                    echo '<p class="komentarze"><b>'.$takeComment['data'].'
                                            | '.$takeComment['autor'].'</b>:
                                            '.$takeComment['tekst'].'
                                        </p>
                                    ';
                                }
                            echo '
                                        </div>
                                    </div>
                                </div>
                            ';
                           }else{
                                echo '<div class="artykuly">
                                    <div class="naglowek">'.$takeNews['tytul'].'</div>
                                    <div class="data">'.$takeNews['data'].'</div>
                                    <div style="clear:both;"></div>
                                    <p class="opis">'.$takeNews['tekst'].'</p>
                                        <form class="komentarz" method="POST" action="nowosci.php">
                                            <input type="text" style="display:none;" name="id" value="'.$i.'" />
                                            <textarea name="tekst" class="pisz" rows="2" placeholder="Co Ci chodzi po głowie?"></textarea><i class="icon-left-open"></i>
                                            <div style="clear:both;"></div>
                                            <input class="autor" rows="2" type="text" name="autor" placeholder="Chcesz się przedstawić?" value="" />
                                            <input class="przycisk" type="submit" value="Zatwierdź" />
                                            <input class="reset" type="button" value="Reset" />
                                            <div class="licznik">140</div><div class="licznik2">30</div>
                                            <div style="clear:both;"></div>
                                        </form>
                            ';
                               if($errorComment == $i){ echo '<div class="error">Wysłanie komentarza nie powiodło się!</div>'; }
                             echo '<div class="komm aktualny_k">
                             <div style="width:100%; margin-top:10px; margin-bottom:10px; text-align:center;">
                                    <a class="btn"> Rozwiń komentarze </a>
                             </div>
                             <div class="comm">';
                                for($n = 0;$n < $resultComment->num_rows;$n++){
                                    $takeComment = $resultComment->fetch_assoc();
                                    echo '<p class="komentarze"><b>'.$takeComment['data'].'
                                            | '.$takeComment['autor'].'</b>:
                                            '.$takeComment['tekst'].'
                                        </p>
                                    ';
                                }
                            echo '
                                        </div>
                                    </div>
                                </div>
                            ';

                           }
                    }
                    $connect->close();
                }
?>
		</div>
		<?php require_once 'include/footer.php'; ?>
	</div>
<script type="text/javascript" src="script/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="script/main.js"></script>
<script type="text/javascript" src="script/news.js"></script>
</body>
</html>
