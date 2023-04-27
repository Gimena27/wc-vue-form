<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div id="PreviewContainer">
    <div id="formContainer">
      <img src="" alt="" srcset="" />
      <form action="tags_form.php" method="post">
        <b>Campaign * </b>
        <select name="campaign" id="campaign_selector" required>
          <option value="" selected disabled>Select a campaign</option>
          <!-- <?php
                    foreach ($campaigns as $campaign)
                    {
                        echo "<option value=\"$campaign\">$campaign</option>";
                    }
                ?> -->
        </select>
        <!-- <b>Campaign * </b>
                <input type="text" name="campaign" required><br /><br />
                <br /> -->
        <b>Template * </b>
        <select name="template" id="template_selector" required>
          <option value="" selected disabled>Select a template</option>
        </select>
        <!-- <b>Template * </b>
                <input type="text" name="template" required><br /><br />
                <br /> -->
        <b>Email</b>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="example@gmail.com"
        />
        <div id="border"></div>
        <div>
          <div class="accordion-container">
            <input class="accordion" value="Advanced" type="button" />
            <p id="icon"></p>
          </div>
          <div class="content">
            <b>To </b>
            <input type="text" id="to" name="to" placeholder="" />
            <b>From </b>
            <input type="text" id="from" name="from" placeholder="" />
            <b>Email From </b>
            <input
              type="text"
              id="email_from"
              name="emailfrom"
              placeholder="example@gmail.com"
            />
            <b>Subject </b>
            <input type="text" id="subject" name="subject" placeholder="" />
            <b>Body </b>
            <input type="text" id="bodyText" name="body" placeholder="" />
            <b>Source Campaign</b>
            <input
              type="text"
              id="src_campaign_selector"
              name="src_campaign"
              placeholder=""
            />
            <!-- <select name="src_campaign" id="src_campaign_selector" required>
                        <option value="" selected disabled>Select a campaign</option>
                        <?php
                            // foreach ($campaigns as $campaign)
                            // {
                            //     echo "<option value=\"$campaign\">$campaign</option>";
                            // }
                        ?>
                    </select> -->
            <b>Source Template</b>
            <input
              type="text"
              id="src_template_selector"
              name="src_template"
              placeholder=""
            />
            <!-- <select name="src_template" id="src_template_selector" required>
                        <option value="" selected disabled>Select a template</option>
                    </select> -->
            <b>Source ID </b>
            <input type="text" id="src_id" name="source_id" placeholder="" />
          </div>
        </div>

        <input class="btn" type="submit" value="Next" />
      </form>
    </div>
    <!-- <div id="iframeContainer">
      <iframe
        id="preview"
        src="https://api.emails.debrain.cloud/preview/?"
        frameborder="0"
      ></iframe>
    </div> -->
  </div>
</template>


