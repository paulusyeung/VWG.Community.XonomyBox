#region Using

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;

using Gizmox.WebGUI.Common;
using Gizmox.WebGUI.Forms;

#endregion

namespace VWG.Community.FormsTest
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Forms.XonomyBox box = new Forms.XonomyBox("Resources/UserData/SampleXmlData.xml", "Resources/UserData/SampleDocSpec.js");
            box.Dock = DockStyle.Fill;
            this.rightPanel.Controls.Add(box);
        }

        private void cmdShowAttribute_Click(object sender, EventArgs e)
        {
            Forms.XonomyBox box = (Forms.XonomyBox)this.rightPanel.Controls[0];
            if (box != null) box.ShowAttribute();
        }

        private void cmdHarvest_Click(object sender, EventArgs e)
        {
            Forms.XonomyBox box = (Forms.XonomyBox)this.rightPanel.Controls[0];
            box.Harvest();
        }
    }
}