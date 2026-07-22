import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { supabase } from '../supabase'; // Modifica il percorso se hai messo il file altrove

export default function HomeScreen() {
  const [status, setStatus] = useState<string>('Connessione a Supabase in corso...');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkConnection() {
      try {
        // Proviamo a fare una richiesta semplice a Supabase
        const { error } = await supabase.from('test').select('*').limit(1);
        
        // Anche se la tabella 'test' non esiste ancora, se Supabase risponde senza errori di rete la connessione è OK
        if (error && error.code !== 'PGRST116' && !error.message.includes('relation "public.test" does not exist')) {
          setStatus(`Errore connessione: ${error.message}`);
        } else {
          setStatus('✅ Connessione a Supabase riuscita!');
        }
      } catch (err) {
        setStatus('❌ Impossibile connettersi a Supabase');
      } finally {
        setLoading(false);
      }
    }

    checkConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RedWire + Supabase</Text>
      {loading ? <ActivityIndicator size="large" color="#e63946" /> : <Text style={styles.status}>{status}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1d3557',
  },
  status: {
    fontSize: 16,
    color: '#2a9d8f',
    textAlign: 'center',
  },
});