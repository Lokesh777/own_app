
import Button from './Components/Button';
import Typography from './Components/Typography';
import ProductHeroLayout from './Components/ProductHeroLayout';

const backgroundImage =
  'https://backiee.com/static/wpdb/wallpapers/1000x563/232206.jpg';

export default function ProductHero() {
  return (
    <div style={{minHeight: "100vh",border:"0px solid red"}}>

        <ProductHeroLayout
          sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9', 
            backgroundPosition: 'center',
          
          }}
        >
          
          <img
            style={{ display: 'none' }}
            src={backgroundImage}
            alt="increase priority"
          />
          <Typography color="inherit" align="center" variant="h2"  marked="center">
            Upgrade your Sundays
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
          >
            Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component="a"
            href="/auth"
            sx={{ minWidth: 200 }}
          >
            Register
          </Button>
          <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
            Discover the experience
          </Typography>
          
        </ProductHeroLayout>

    </div>
  );
}