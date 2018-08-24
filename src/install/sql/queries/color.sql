
DROP TABLE IF EXISTS color CASCADE;

CREATE TABLE color
(
    id    serial       NOT NULL  PRIMARY KEY,
    name  varchar(24)  NOT NULL  UNIQUE,
    code  char(7)      NOT NULL  UNIQUE
);


-- ADD DEFAULT COLORS
INSERT INTO color
(name, code)

VALUES
('red',           '#db2c3e'),
('orange',        '#ff7c19'),
('yellow',        '#ffdc00'),
('goldenrod',     '#dbd40a'),
('lime',          '#01ff70'),
('green',         '#0e8a16'),
('olive',         '#3d9970'),
('teal',          '#39cccc'),
('aqua',          '#a4f9eb'),
('light-blue',    '#7fdbff'),
('blue',          '#0366d6'),
('dark-blue',     '#164f89'),
('navy',          '#001f3f'),
('purple',        '#7c40d6'),
('bright-purple', '#b10dc9'),
('pink',          '#f27dd7'),
('fuscia',        '#f012be'),
('hot-pink',      '#d30a68'),
('maroon',        '#85144b');
