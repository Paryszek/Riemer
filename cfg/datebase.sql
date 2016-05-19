-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Czas wygenerowania: 23 Lis 2015, 13:02
-- Wersja serwera: 5.5.46-cll
-- Wersja PHP: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `gregory_new`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `id_komentarz` int(255) NOT NULL,
  `autor` char(255) COLLATE utf8_polish_ci NOT NULL,
  `tekst` text COLLATE utf8_polish_ci NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=31 ;

--
-- Zrzut danych tabeli `comments`
--

INSERT INTO `comments` (`id`, `id_komentarz`, `autor`, `tekst`, `data`) VALUES
(21, 2, 'qweqweqweqwe', 'dgqiwueqwgeqwe', '2015-09-28'),
(22, 2, 'qweqweqweqwe', 'dgqiwueqwgeqwe', '2015-09-28'),
(23, 5, 'anonim', 'joo', '2015-10-16'),
(24, 4, 'Micha&Aring;', 'Witaj &Aring;', '2015-10-16'),
(25, 3, '&Auml;', 'Lubie placki 123&Aring;&frac14;&Aring;&ordm;&Auml;', '2015-10-16'),
(26, 2, 'Franek', 'Test test &Aring;&frac14;&Aring;&ordm;', '2015-10-16'),
(27, 5, 'Grze&Aring;', 'Siemka jestem grze&Aring;', '2015-10-16'),
(28, 5, 'anonim', 'jooo', '2015-11-14'),
(29, 5, 'anonim', '&Aring;&frac14;&Aring;&ordm;&Auml;', '2015-11-14'),
(30, 2, 'anonim', '&Aring;&frac14;&Aring;&ordm;&Auml;', '2015-11-16');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `tytul` char(255) COLLATE utf8_polish_ci NOT NULL,
  `tekst` text COLLATE utf8_polish_ci NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci AUTO_INCREMENT=6 ;

--
-- Zrzut danych tabeli `news`
--

INSERT INTO `news` (`id`, `tytul`, `tekst`, `data`) VALUES
(1, 'Pierwszy artykuł', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper lectus eget tristique luctus. Cras et leo sed sem ultricies mattis vel non massa. Mauris porttitor odio velit, ac semper magna egestas vitae. Aenean vel est elit. Phasellus non sagittis justo. Donec sit amet ultrices ligula. Etiam tellus mauris, posuere quis lobortis in, tincidunt sit amet sapien.', '2015-09-23'),
(2, 'Drugi artykuł', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis felis id posuere imperdiet. Nunc imperdiet metus non purus ultrices ullamcorper. In a magna faucibus sapien fringilla placerat. Mauris et diam enim. Aenean ac nulla sit amet est condimentum elementum. Praesent a elementum libero. ', '2015-09-23'),
(3, 'Co nowego?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis felis id posuere imperdiet. Nunc imperdiet metus non purus ultrices ullamcorper. In a magna faucibus sapien fringilla placerat. Mauris et diam enim. Aenean ac nulla sit amet est condimentum elementum. Praesent a elementum libero.', '2015-09-25'),
(4, 'Kolejny artykuł', '\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper lectus eget tristique luctus. Cras et leo sed sem ultricies mattis vel non massa. Mauris porttitor odio velit, ac semper magna egestas vitae. Aenean vel est elit. Phasellus non sagittis justo. Donec sit amet ultrices ligula. Etiam tellus mauris, posuere quis lobortis in, tincidunt sit amet sapien.', '2015-09-25'),
(5, 'Nowe wiadomości', '<iframe width="560" height="315" src="https://www.youtube.com/embed/6sOFVmOQxUs" frameborder="0" allowfullscreen></iframe>', '2015-09-28');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
