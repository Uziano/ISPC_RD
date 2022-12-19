-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-12-2022 a las 03:26:33
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `app_notas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add Usuario', 6, 'add_user'),
(22, 'Can change Usuario', 6, 'change_user'),
(23, 'Can delete Usuario', 6, 'delete_user'),
(24, 'Can view Usuario', 6, 'view_user'),
(25, 'Can add notes', 7, 'add_notes'),
(26, 'Can change notes', 7, 'change_notes'),
(27, 'Can delete notes', 7, 'delete_notes'),
(28, 'Can view notes', 7, 'view_notes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'contenttypes', 'contenttype'),
(7, 'notas', 'notes'),
(5, 'sessions', 'session'),
(6, 'usuario', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'usuario', '0001_initial', '2022-12-15 00:37:58.543114'),
(2, 'contenttypes', '0001_initial', '2022-12-15 00:37:58.706116'),
(3, 'admin', '0001_initial', '2022-12-15 00:37:59.193115'),
(4, 'admin', '0002_logentry_remove_auto_add', '2022-12-15 00:37:59.203116'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-12-15 00:37:59.219111'),
(6, 'contenttypes', '0002_remove_content_type_name', '2022-12-15 00:37:59.439113'),
(7, 'auth', '0001_initial', '2022-12-15 00:38:00.247176'),
(8, 'auth', '0002_alter_permission_name_max_length', '2022-12-15 00:38:00.457177'),
(9, 'auth', '0003_alter_user_email_max_length', '2022-12-15 00:38:00.471177'),
(10, 'auth', '0004_alter_user_username_opts', '2022-12-15 00:38:00.504180'),
(11, 'auth', '0005_alter_user_last_login_null', '2022-12-15 00:38:00.575180'),
(12, 'auth', '0006_require_contenttypes_0002', '2022-12-15 00:38:00.654174'),
(13, 'auth', '0007_alter_validators_add_error_messages', '2022-12-15 00:38:00.700176'),
(14, 'auth', '0008_alter_user_username_max_length', '2022-12-15 00:38:00.756177'),
(15, 'auth', '0009_alter_user_last_name_max_length', '2022-12-15 00:38:00.825175'),
(16, 'auth', '0010_alter_group_name_max_length', '2022-12-15 00:38:00.931171'),
(17, 'auth', '0011_update_proxy_permissions', '2022-12-15 00:38:01.057177'),
(18, 'auth', '0012_alter_user_first_name_max_length', '2022-12-15 00:38:01.141177'),
(19, 'usuario', '0002_user_is_active_user_is_staff', '2022-12-15 00:38:01.402175'),
(20, 'usuario', '0003_user_password', '2022-12-15 00:38:01.537182'),
(21, 'notas', '0001_initial', '2022-12-15 00:38:01.666177'),
(22, 'notas', '0002_notes_user', '2022-12-15 00:38:01.841173'),
(23, 'notas', '0003_alter_notes_user', '2022-12-15 00:38:02.545176'),
(24, 'notas', '0004_alter_notes_description', '2022-12-15 00:38:02.767175'),
(25, 'notas', '0005_alter_notes_deadline_alter_notes_user', '2022-12-15 00:38:03.099176'),
(26, 'notas', '0006_alter_notes_deadline', '2022-12-15 00:38:03.260176'),
(27, 'notas', '0007_notes_beginning', '2022-12-15 00:38:03.386183'),
(28, 'notas', '0008_alter_notes_user', '2022-12-15 00:38:03.821175'),
(29, 'notas', '0009_alter_notes_user', '2022-12-15 00:38:04.222175'),
(30, 'sessions', '0001_initial', '2022-12-15 00:38:04.417177'),
(31, 'usuario', '0004_remove_user_is_staff_user_groups_user_is_superuser_and_more', '2022-12-15 00:38:05.088178'),
(32, 'usuario', '0005_user_is_staff', '2022-12-15 00:38:05.278180'),
(33, 'usuario', '0006_remove_user_image', '2022-12-16 19:45:43.609033');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas_notes`
--

CREATE TABLE `notas_notes` (
  `id` bigint(20) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  `current_state` varchar(1) NOT NULL,
  `deadline` date NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `beginning` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `notas_notes`
--

INSERT INTO `notas_notes` (`id`, `title`, `description`, `current_state`, `deadline`, `user_id`, `beginning`) VALUES
(1, 'Ir al taller', 'Cambiar rueda', '1', '2022-12-30', 1, '2022-12-15 00:39:58.853842'),
(2, 'Ir a la peluqueria', 'Teñirme y cortarme el pelo', '1', '2022-12-30', 2, '2022-12-15 00:40:32.706469'),
(3, 'Ir al super', 'Comprar comida para noche vieja', '1', '2022-12-30', 2, '2022-12-15 00:40:53.928624'),
(5, 'Ir al centro', 'Comprar ropa para la cena', '1', '2022-12-23', 3, '2022-12-17 17:14:54.066316'),
(6, 'Ir a Cordoba', 'Comprar ropa para la cena', '1', '2022-12-29', 3, '2022-12-17 17:23:52.805704'),
(8, 'Arreglar escritorio', 'Comprar repuesto', '2', '2022-12-19', 4, '2022-12-17 18:12:19.429159'),
(9, 'Comprar pintura', 'Pintura color rojo', '3', '2022-12-18', 5, '2022-12-17 18:14:05.708196');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_user`
--

CREATE TABLE `usuario_user` (
  `id` bigint(20) NOT NULL,
  `mail` varchar(64) NOT NULL,
  `username` varchar(32) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `password` varchar(128) NOT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_staff` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_user`
--

INSERT INTO `usuario_user` (`id`, `mail`, `username`, `is_active`, `password`, `is_superuser`, `last_login`, `is_staff`) VALUES
(1, 'test@gmail.com', 'test', 1, 'pbkdf2_sha256$390000$psZWBJTCf8V0R5luOvFhI0$zETmt2KqhRBdgZp+1Ql/ApyWMhbWAGNWQphitmbIwTE=', 0, NULL, 0),
(2, 'pepito@gmail.com', 'pepito', 1, 'pbkdf2_sha256$390000$gv3HEboWdeIMI4k3UpUMcs$goNnEs+fjGOhEZTRd7HcvSISn0D/bSQ3WGHXT5YyZPo=', 0, NULL, 0),
(3, 'jose@gmail.com', 'jose', 1, 'pbkdf2_sha256$390000$j2liaXp0bMulUzoikW8E7m$1EDlcRP6083hq3NXB6dCx+kdRDm8IFuwMfDD9nwkVEY=', 0, NULL, 0),
(4, 'cande@gmail.com', 'cande', 1, 'pbkdf2_sha256$390000$aZxqmI2QoDquyfceD6dpXx$07sVNPlCPXNFYlPtX0wLp3P2XDYHe7cxtSTlEjI2cZc=', 1, NULL, 1),
(5, 'juan@gmail.com', 'juan', 1, 'pbkdf2_sha256$390000$wiiq6kbBLuzoFlyXnxu1PC$P+AjvvWnrhdBUSuOtMn5irMkt1MGR2dVtLiK+5UryEo=', 0, NULL, 0),
(6, 'ana@gmail.com', 'Ana', 1, 'pbkdf2_sha256$390000$BrQ7BkMMdQyQREJCDFgNcj$mzaJ6UXSuHtsxwulu6/mNuftvPyS4wfSX40jQ4WEkTA=', 0, NULL, 0),
(7, 'lara@gmail.com', 'larita', 1, 'pbkdf2_sha256$390000$Gcyxh0bhOB5GzKmwvSaIvi$NS7XN0k56Ma/44qYpjm/QSq4jpsl2aPQ2/+M/AaIu4I=', 0, NULL, 0),
(8, 'maria@gmail.com', 'mariaaa', 1, 'pbkdf2_sha256$390000$WsHPbZeLZINBPDxjt9Sgan$vnUuy4vG4YswvOXU5qGot8ifue3jOgOCEyGAWW3eat0=', 0, NULL, 0),
(9, 'melina@gmail.com', 'melinita', 1, 'pbkdf2_sha256$390000$jYOFGBWvwwVwF3aUVSFckQ$2Lje1BvuwQ4C6SIA8vD5fT69c6iDM6XsEygYsyCmTE8=', 0, NULL, 0),
(10, 'pablito@gmail.com', 'pablito', 1, 'pbkdf2_sha256$390000$J8BtNcjowAge1uBPuffj5f$PH2uYyLvbAq3tfUncfGxV59bCesjMiAFDT5L1slzbOs=', 0, NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_user_groups`
--

CREATE TABLE `usuario_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_user_user_permissions`
--

CREATE TABLE `usuario_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_usuario_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `notas_notes`
--
ALTER TABLE `notas_notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notas_notes_user_id_09b0b8fc` (`user_id`);

--
-- Indices de la tabla `usuario_user`
--
ALTER TABLE `usuario_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `usuario_user_groups`
--
ALTER TABLE `usuario_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario_user_groups_user_id_group_id_1b0807de_uniq` (`user_id`,`group_id`),
  ADD KEY `usuario_user_groups_group_id_e313e18d_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `usuario_user_user_permissions`
--
ALTER TABLE `usuario_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario_user_user_permis_user_id_permission_id_d74a6945_uniq` (`user_id`,`permission_id`),
  ADD KEY `usuario_user_user_pe_permission_id_fae57acd_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `notas_notes`
--
ALTER TABLE `notas_notes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuario_user`
--
ALTER TABLE `usuario_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuario_user_groups`
--
ALTER TABLE `usuario_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario_user_user_permissions`
--
ALTER TABLE `usuario_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_usuario_user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario_user` (`id`);

--
-- Filtros para la tabla `notas_notes`
--
ALTER TABLE `notas_notes`
  ADD CONSTRAINT `notas_notes_user_id_09b0b8fc_fk_usuario_user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario_user` (`id`);

--
-- Filtros para la tabla `usuario_user_groups`
--
ALTER TABLE `usuario_user_groups`
  ADD CONSTRAINT `usuario_user_groups_group_id_e313e18d_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `usuario_user_groups_user_id_1df7a96d_fk_usuario_user_id` FOREIGN KEY (`user_id`) REFERENCES `usuario_user` (`id`);

--
-- Filtros para la tabla `usuario_user_user_permissions`
--
ALTER TABLE `usuario_user_user_permissions`
  ADD CONSTRAINT `usuario_user_user_pe_permission_id_fae57acd_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `usuario_user_user_pe_user_id_bfc8eb29_fk_usuario_u` FOREIGN KEY (`user_id`) REFERENCES `usuario_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
