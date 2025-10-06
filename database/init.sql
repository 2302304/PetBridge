CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  type VARCHAR(20),
  age INT,
  breed VARCHAR(50),
  description TEXT,
  image_url TEXT,
  status VARCHAR(20) DEFAULT 'available'
);

CREATE TABLE IF NOT EXISTS adoptions (
  id SERIAL PRIMARY KEY,
  animal_id INTEGER REFERENCES animals(id),
  adopter_name VARCHAR(100),
  adopter_email VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO animals (name, type, age, breed, description, image_url)
VALUES
('Milo', 'koira', 3, 'Labradorinnoutaja', 'Ystävällinen ja energinen', 'https://place-puppy.com/200x200'),
('Luna', 'kissa', 2, 'Maine Coon', 'Lempeä ja seurallinen', 'https://placekitten.com/200/200'),
('Charlie', 'koira', 4, 'Beagle', 'Uteliasta sorttia', 'https://place-puppy.com/201x200'),
('Simba', 'kissa', 1, 'Siamilainen', 'Leikkisä ja älykäs', 'https://placekitten.com/201/200'),
('Rocky', 'koira', 6, 'Saksanpaimenkoira', 'Suojelunhaluinen ja lojaali', 'https://place-puppy.com/202x200'),
('Nala', 'kissa', 5, 'Bengali', 'Rauhallinen ja lempeä', 'https://placekitten.com/202/200'),
('Max', 'koira', 2, 'Cocker Spanieli', 'Sosiaalinen ja ystävällinen', 'https://place-puppy.com/203x200'),
('Bella', 'kissa', 4, 'Persialainen', 'Hiljainen ja seurallinen', 'https://placekitten.com/203/200'),
('Buddy', 'koira', 1, 'Jack Russell', 'Iloinen ja vilkas', 'https://place-puppy.com/204x200'),
('Cleo', 'kissa', 3, 'Norjalainen metsäkissa', 'Rauhallinen ja viisas', 'https://placekitten.com/204/200');
