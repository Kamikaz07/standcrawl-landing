import PageLayout from '../components/PageLayout';

export default function Privacidade() {
  return (
    <PageLayout
      title="Política de Privacidade"
      subtitle="Como recolhemos, tratamos e protegemos os seus dados pessoais."
    >
      <p>
        <strong>Última atualização:</strong> 7 de março de 2026
      </p>
      <p>
        A <strong>StandCrawlAI</strong> respeita a privacidade dos seus Utilizadores e compromete-se
        a proteger os dados pessoais em conformidade com o Regulamento (UE) 2016/679 (RGPD), a Lei
        n.º 58/2019 e demais legislação aplicável.
      </p>

      <h2>1. Responsável pelo Tratamento</h2>
      <div className="info-card">
        <ul className="!mb-0">
          <li><strong>Entidade:</strong> StandCrawlAI</li>
          <li><strong>Email:</strong> info@standcrawl.pt</li>
          <li><strong>Website:</strong> standcrawl.pt</li>
        </ul>
      </div>

      <h2>2. Dados Pessoais Recolhidos</h2>
      <p>Recolhemos as seguintes categorias de dados pessoais:</p>

      <h3>2.1. Dados de Registo</h3>
      <ul>
        <li>Nome completo</li>
        <li>Endereço de email</li>
        <li>Número de telemóvel (opcional)</li>
        <li>Nome do stand / empresa</li>
      </ul>

      <h3>2.2. Dados de Utilização</h3>
      <ul>
        <li>Endereço IP</li>
        <li>Tipo de navegador e sistema operativo</li>
        <li>Páginas visitadas e tempo de permanência</li>
        <li>Ações realizadas na plataforma (pesquisas, configurações, etc.)</li>
      </ul>

      <h3>2.3. Dados de Negócio</h3>
      <ul>
        <li>Informação de stock de veículos (marcas, modelos, preços, quilometragem)</li>
        <li>Dados de leads e contactos comerciais</li>
        <li>Histórico de comunicações (WhatsApp, email)</li>
        <li>Preferências e filtros de pesquisa</li>
      </ul>

      <h3>2.4. Dados do Formulário de Contacto</h3>
      <ul>
        <li>Nome</li>
        <li>Email</li>
        <li>Nome do stand</li>
        <li>Mensagem</li>
      </ul>

      <h2>3. Finalidades do Tratamento</h2>
      <p>Os dados pessoais são tratados para as seguintes finalidades:</p>
      <ul>
        <li><strong>Prestação do Serviço:</strong> gestão de conta, acesso às funcionalidades da plataforma, processamento de dados de stock e leads.</li>
        <li><strong>Comunicações:</strong> envio de notificações sobre oportunidades de aquisição, alertas de sistema e comunicações de suporte.</li>
        <li><strong>Melhoria do Serviço:</strong> análise de padrões de utilização para otimizar a experiência do utilizador e desenvolver novas funcionalidades.</li>
        <li><strong>Segurança:</strong> deteção e prevenção de fraude, acessos não autorizados e proteção contra ataques informáticos.</li>
        <li><strong>Obrigações Legais:</strong> cumprimento de obrigações fiscais, contabilísticas e regulatórias.</li>
      </ul>

      <h2>4. Base Legal do Tratamento</h2>
      <p>O tratamento dos dados pessoais baseia-se nas seguintes bases legais:</p>
      <ul>
        <li><strong>Execução de Contrato (Art. 6.º, n.º 1, al. b) RGPD):</strong> para prestação das funcionalidades da plataforma.</li>
        <li><strong>Interesse Legítimo (Art. 6.º, n.º 1, al. f) RGPD):</strong> para melhoria do serviço, segurança e prevenção de fraude.</li>
        <li><strong>Consentimento (Art. 6.º, n.º 1, al. a) RGPD):</strong> para comunicações de marketing e cookies não essenciais.</li>
        <li><strong>Obrigação Legal (Art. 6.º, n.º 1, al. c) RGPD):</strong> para cumprimento de obrigações legais e fiscais.</li>
      </ul>

      <h2>5. Partilha de Dados</h2>
      <p>
        A StandCrawlAI <strong>não vende nem partilha dados pessoais</strong> dos seus Utilizadores
        com terceiros para fins de marketing. Os dados podem ser partilhados com:
      </p>
      <ul>
        <li><strong>Subprocessadores técnicos:</strong> serviços de alojamento (infraestrutura europeia), processamento de pagamentos e envio de comunicações (WhatsApp Business API, serviços de email).</li>
        <li><strong>Autoridades competentes:</strong> quando exigido por lei, regulamento ou ordem judicial.</li>
      </ul>
      <p>
        Todos os subprocessadores estão vinculados por acordos de processamento de dados que
        garantem o mesmo nível de proteção exigido pelo RGPD.
      </p>

      <h2>6. Transferências Internacionais</h2>
      <p>
        Os dados são preferencialmente armazenados e processados dentro do Espaço Económico
        Europeu (EEE). Quando necessário recorrer a serviços fora do EEE (por exemplo, APIs de IA),
        garantimos as salvaguardas adequadas, nomeadamente:
      </p>
      <ul>
        <li>Cláusulas contratuais tipo aprovadas pela Comissão Europeia.</li>
        <li>Decisões de adequação da Comissão Europeia.</li>
        <li>Certificações ou códigos de conduta aprovados.</li>
      </ul>

      <h2>7. Segurança dos Dados</h2>
      <p>
        Implementamos medidas técnicas e organizativas para proteger os dados pessoais, incluindo:
      </p>
      <ul>
        <li><strong>Encriptação AES-256</strong> para dados em repouso e em trânsito (TLS 1.3).</li>
        <li><strong>HashiCorp Vault</strong> para gestão segura de chaves e segredos.</li>
        <li><strong>Cloudflare Zero Trust</strong> para controlo de acesso à infraestrutura.</li>
        <li><strong>Rate limiting e WAF</strong> para proteção contra ataques.</li>
        <li><strong>Autenticação JWT</strong> com refresh tokens e rotação automática.</li>
        <li><strong>Backups automáticos diários</strong> com encriptação e retenção configurável.</li>
        <li><strong>Monitorização contínua</strong> de logs e alertas de segurança.</li>
      </ul>

      <h2>8. Retenção de Dados</h2>
      <p>Os dados pessoais são conservados durante os seguintes períodos:</p>
      <ul>
        <li><strong>Dados de conta:</strong> enquanto a conta estiver ativa, mais 30 dias após o cancelamento.</li>
        <li><strong>Dados de utilização:</strong> 12 meses para fins de análise e melhoria.</li>
        <li><strong>Dados de faturação:</strong> 10 anos, conforme obrigações fiscais portuguesas.</li>
        <li><strong>Logs de segurança:</strong> 6 meses.</li>
        <li><strong>Dados de contacto (formulário):</strong> 12 meses ou até resolução do pedido.</li>
      </ul>
      <p>
        Findo o período de retenção, os dados são eliminados de forma segura e irreversível.
      </p>

      <h2>9. Direitos do Titular</h2>
      <p>
        Em conformidade com o RGPD, o Utilizador tem os seguintes direitos relativamente aos seus
        dados pessoais:
      </p>
      <ul>
        <li><strong>Direito de Acesso:</strong> obter confirmação e acesso aos seus dados pessoais.</li>
        <li><strong>Direito de Retificação:</strong> corrigir dados inexatos ou incompletos.</li>
        <li><strong>Direito ao Apagamento:</strong> solicitar a eliminação dos seus dados ("direito a ser esquecido").</li>
        <li><strong>Direito à Portabilidade:</strong> receber os seus dados num formato estruturado e legível por máquina.</li>
        <li><strong>Direito de Oposição:</strong> opor-se ao tratamento dos seus dados para determinadas finalidades.</li>
        <li><strong>Direito à Limitação:</strong> limitar o tratamento dos seus dados em determinadas circunstâncias.</li>
        <li><strong>Direito de Retirar o Consentimento:</strong> retirar o consentimento a qualquer momento, sem comprometer a licitude do tratamento anterior.</li>
      </ul>
      <p>
        Para exercer qualquer destes direitos, contacte-nos através de <strong>info@standcrawl.pt</strong>.
        Responderemos no prazo máximo de 30 dias.
      </p>

      <h2>10. Reclamações</h2>
      <p>
        Se considerar que o tratamento dos seus dados pessoais viola o RGPD, tem o direito de
        apresentar uma reclamação junto da Comissão Nacional de Proteção de Dados (CNPD):
      </p>
      <div className="info-card">
        <ul className="!mb-0">
          <li><strong>Entidade:</strong> Comissão Nacional de Proteção de Dados (CNPD)</li>
          <li><strong>Website:</strong> <a href="https://www.cnpd.pt" target="_blank" rel="nofollow noopener noreferrer">www.cnpd.pt</a></li>
          <li><strong>Morada:</strong> Av. D. Carlos I, 134, 1200-651 Lisboa</li>
        </ul>
      </div>

      <h2>11. Alterações à Política</h2>
      <p>
        A StandCrawlAI pode atualizar esta Política de Privacidade periodicamente. Quaisquer
        alterações significativas serão comunicadas aos Utilizadores por email ou notificação na
        Plataforma com pelo menos 15 dias de antecedência.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Para questões relacionadas com a proteção de dados pessoais, contacte-nos:
      </p>
      <ul>
        <li><strong>Email:</strong> info@standcrawl.pt</li>
        <li><strong>Website:</strong> standcrawl.pt</li>
      </ul>
    </PageLayout>
  );
}
