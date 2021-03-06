USE [master]
GO
/****** Object:  Database [SynmedNursingHome]    Script Date: 5/9/2022 7:13:30 AM ******/
CREATE DATABASE [SynmedNursingHome]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SynmedNursingHome', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\SynmedNursingHome.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SynmedNursingHome_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\SynmedNursingHome_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [SynmedNursingHome] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SynmedNursingHome].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SynmedNursingHome] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET ARITHABORT OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SynmedNursingHome] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SynmedNursingHome] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SynmedNursingHome] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SynmedNursingHome] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET RECOVERY FULL 
GO
ALTER DATABASE [SynmedNursingHome] SET  MULTI_USER 
GO
ALTER DATABASE [SynmedNursingHome] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SynmedNursingHome] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SynmedNursingHome] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SynmedNursingHome] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SynmedNursingHome] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SynmedNursingHome] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'SynmedNursingHome', N'ON'
GO
ALTER DATABASE [SynmedNursingHome] SET QUERY_STORE = OFF
GO
USE [SynmedNursingHome]
GO
/****** Object:  User [sa1]    Script Date: 5/9/2022 7:13:30 AM ******/
CREATE USER [sa1] FOR LOGIN [sa1] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Messages]    Script Date: 5/9/2022 7:13:30 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Messages](
	[RxNumber] [nvarchar](20) NULL,
	[HL7Message] [nvarchar](2000) NULL,
	[NursingCode] [nvarchar](2) NULL,
	[PMSIP] [nvarchar](20) NULL,
	[Datetime] [datetime] NULL
) ON [PRIMARY]
GO
INSERT [dbo].[Messages] ([RxNumber], [HL7Message], [NursingCode], [PMSIP], [Datetime]) VALUES (N'19357971', N'MSH|^~\&|QS1PHARMACY||QS1ORDERS|RCAA|20220110114438||RDE^O01|20220110114438|P|2.2|
PID||10135||GEBEA|GEBEAU, ALVIN|||M||||||||||10135|369325137|
PV1|||^^^GNCC|
ORC|DC|19357971|||||^RX19357971&0500 ,1300 ,2100^^202201052000^202201101144^^^S00000S0^^|||OC^LTC, ONECARE^Rph^CO^OLIVEIRA, CA^Tech^||BEAL, JENNIFER|||20220105|
RXE|^Q8H 3 &0500 ,1300 ,2100^^202201050700^202201101144^^^00000002^^0500 ,1300 ,2100|^MAPAP 500 MG CAPLET^MAPAP 500 MG CAPLET^ACETA8097^00904672040^00904672040|2|6|^TAB||TAKE 2 TABLETS BY MOUTH EVERY 8 HOURS RECOMMENDED: DO NOT EXCEED 3GM OF APAP IN 24 HOURS||N|2^84||P00|FB3776311|N0|19357971|001|01
NTE||||
RXR|^PO||||
ZRX|O|202201050700|GEBEA|20220105||||
ZMT|||||||14|MAJOR|OO|oblong|white|L484^|202201050700|BEALJE|RCAA||THE REDIES CENTER SALINE|^^^|7B||00|||00000000|||19357971220105|||||||||||||N|FA68|19330617||#|00000000|2545903|RECOMMENDED: DO NOT EXCEED 3GM OF APAP IN 24 HOURS||01|N|004490|0904672040|20220704||1^4C9E^AUL~2^4040^AUL~3^4040^AUL|MAJOR|SYN||7346478535||
ZM2|ACETAMINOPHEN|OC|0000159^00001CD^||6230 STATE RD APT 156|SALINE|MI|481769834|||N||||N||||1935797122011011443850||500.0000|84^^^^|N|||||9PM|1790918290|| .0000|MED-A EVANGELICA||||||010522||||N|||N|2301|7347646831|| .0000|481092700|1|N||4260 PLYMOUTH RD LEVEL 1^E ANN ARBOR HEALTH AND GE^ANN ARBOR^MI| 84.0000|
ZR1||ACETA8097||00000000|500 MG||84|||3|
ZTO|||||||||||||', N'SN', N'192.168.1.1', CAST(N'2022-05-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Messages] ([RxNumber], [HL7Message], [NursingCode], [PMSIP], [Datetime]) VALUES (N'19357971', N'MSH|^~\&|QS1PHARMACY||QS1ORDERS|RCAA|20220110114438||RDE^O01|20220110114438|P|2.2|
PID||10135||GEBEA|GEBEAU, ALVIN|||M||||||||||10135|369325137|
PV1|||^^^GNCC|
ORC|DC|19357971|||||^RX19357971&0500 ,1300 ,2100^^202201052000^202201101144^^^S00000S0^^|||OC^LTC, ONECARE^Rph^CO^OLIVEIRA, CA^Tech^||BEAL, JENNIFER|||20220105|
RXE|^Q8H 3 &0500 ,1300 ,2100^^202201050700^202201101144^^^00000002^^0500 ,1300 ,2100|^MAPAP 500 MG CAPLET^MAPAP 500 MG CAPLET^ACETA8097^00904672040^00904672040|2|6|^TAB||TAKE 2 TABLETS BY MOUTH EVERY 8 HOURS RECOMMENDED: DO NOT EXCEED 3GM OF APAP IN 24 HOURS||N|2^84||P00|FB3776311|N0|19357971|001|01
NTE||||
RXR|^PO||||
ZRX|O|202201050700|GEBEA|20220105||||
ZMT|||||||14|MAJOR|OO|oblong|white|L484^|202201050700|BEALJE|RCAA||THE REDIES CENTER SALINE|^^^|7B||00|||00000000|||19357971220105|||||||||||||N|FA68|19330617||#|00000000|2545903|RECOMMENDED: DO NOT EXCEED 3GM OF APAP IN 24 HOURS||01|N|004490|0904672040|20220704||1^4C9E^AUL~2^4040^AUL~3^4040^AUL|MAJOR|SYN||7346478535||
ZM2|ACETAMINOPHEN|OC|0000159^00001CD^||6230 STATE RD APT 156|SALINE|MI|481769834|||N||||N||||1935797122011011443850||500.0000|84^^^^|N|||||9PM|1790918290|| .0000|MED-A EVANGELICA||||||010522||||N|||N|2301|7347646831|| .0000|481092700|1|N||4260 PLYMOUTH RD LEVEL 1^E ANN ARBOR HEALTH AND GE^ANN ARBOR^MI| 84.0000|
ZR1||ACETA8097||00000000|500 MG||84|||3|
ZTO|||||||||||||', N'AL', N'192.168.1.1', CAST(N'2022-05-05T00:00:00.000' AS DateTime))
GO
USE [master]
GO
ALTER DATABASE [SynmedNursingHome] SET  READ_WRITE 
GO
